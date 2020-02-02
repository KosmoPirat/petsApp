import { h } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import PropTypes from 'prop-types';
import style from './ProfilePhotoGallery.css';

const ProfilePhotoGallery = ({ mainPhotoUrl, additionalPhotos, youtubeEmbeddingCode }) => {
    const [modalImage, changeModalImage] = useState(undefined);

    const hideModal = useCallback(e => {
        if (e.key && e.key !== 'Escape') {
            return;
        }

        document.removeEventListener('keydown', hideModal, false);
        changeModalImage(undefined);
    });

    const showModal = useCallback(e => {
        if (e.key && e.key !== 'Enter') {
            return;
        }

        document.addEventListener('keydown', hideModal, false);
        changeModalImage(e.target.currentSrc || e.target.firstElementChild.currentSrc);
    });

    return (
        <>
            {youtubeEmbeddingCode !== '' && (
                <div
                    className={style['profile-photo-gallery__video']}
                    dangerouslySetInnerHTML={{ __html: youtubeEmbeddingCode }}
                />
            )}
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

            <div className={style['profile-photo-gallery__grid']}>
                <figure className="image">
                    <switch onClick={showModal} onKeyDown={showModal} tabIndex={1}>
                        <img src={mainPhotoUrl} alt="Фотография питомца" />
                    </switch>
                </figure>
                {additionalPhotos.length !== 0 &&
                    additionalPhotos.map(photo => {
                        return (
                            <figure className="image">
                                <switch onClick={showModal} onKeyDown={showModal} tabIndex={3}>
                                    <img src={photo.fields.file.url} alt="Фотография питомца" />
                                </switch>
                            </figure>
                        );
                    })}
            </div>
        </>
    );
};

ProfilePhotoGallery.propTypes = {
    mainPhotoUrl: PropTypes.string.isRequired,
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
