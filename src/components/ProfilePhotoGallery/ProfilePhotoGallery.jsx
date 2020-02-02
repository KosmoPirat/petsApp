import { h } from 'preact';
import { useState, useCallback, useRef, useEffect, useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';
import style from './ProfilePhotoGallery.css';
import ProfileAdditionalPhoto from '../ProfileAdditionalPhoto/ProfileAdditionalPhoto';
import Utils from '../../helpers/utils';

const ProfilePhotoGallery = ({ additionalPhotos, youtubeEmbeddingCode }) => {
    const [modalImage, changeModalImage] = useState();
    const [flexHeight, changeFlexHeight] = useState(0);
    const flexRef = useRef();

    const hideModal = useCallback(e => {
        if (e.key && e.key !== 'Escape') {
            return;
        }

        document.removeEventListener('keydown', hideModal, false);
        changeModalImage();
    });

    const showModal = useCallback(e => {
        if (e.key && e.key !== 'Enter') {
            return;
        }

        document.addEventListener('keydown', hideModal, false);
        changeModalImage(e.target.currentSrc || e.target.firstElementChild.currentSrc);
    });

    useEffect(() => {
        changeFlexHeight(flexRef.current.clientHeight);
    }, []);

    const safeEmbeddingCode = useMemo(() => ({ __html: Utils.preventXSS(youtubeEmbeddingCode) }), [
        youtubeEmbeddingCode,
    ]);

    return (
        <>
            <div className={`modal ${modalImage !== undefined ? 'is-active' : ''}`}>
                <switch className="modal-background" onClick={hideModal} onKeyDown={hideModal} />
                <div className="modal-content">
                    <p className="image">
                        <img src={modalImage} alt="" />
                    </p>
                </div>
                <button
                    className="modal-close is-large"
                    aria-label="close"
                    type="button"
                    onClick={hideModal}
                    onKeyDown={hideModal}
                />
            </div>

            <div className={style['profile-photo-gallery__grid']} ref={flexRef}>
                {additionalPhotos.length !== 0 &&
                    additionalPhotos.map((photo, index) => (
                        <ProfileAdditionalPhoto
                            indexKey={index}
                            file={photo.fields.file}
                            height={flexHeight}
                            onImageClick={showModal}
                        />
                    ))}
                {safeEmbeddingCode !== '' && (
                    <div
                        className={style['profile-photo-gallery__video']}
                        dangerouslySetInnerHTML={safeEmbeddingCode}
                    />
                )}
            </div>
        </>
    );
};

ProfilePhotoGallery.propTypes = {
    additionalPhotos: PropTypes.arrayOf(
        PropTypes.shape({
            fields: PropTypes.shape({
                file: PropTypes.shape({
                    url: PropTypes.string,
                }),
            }),
        })
    ),
    youtubeEmbeddingCode: PropTypes.string,
};

ProfilePhotoGallery.defaultProps = {
    additionalPhotos: [],
    youtubeEmbeddingCode: '',
};

export default ProfilePhotoGallery;
