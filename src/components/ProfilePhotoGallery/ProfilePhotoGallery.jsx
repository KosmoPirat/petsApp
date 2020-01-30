import { h } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './ProfilePhotoGallery.css';

const ProfilePhotoGallery = ({ mainPhotoUrl }) => {
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
            <div className={classNames('modal', { 'is-active': !!modalImage })}>
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
                        <img src={mainPhotoUrl} alt="Фотограция питомца" />
                    </switch>
                </figure>
                <figure className="image">
                    <switch onClick={showModal} onKeyDown={showModal} tabIndex={2}>
                        <img
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-dog-royalty-free-image-505534037-1565105327.jpg"
                            alt="Фотограция питомца"
                        />
                    </switch>
                </figure>
                <figure className="image">
                    <switch onClick={showModal} onKeyDown={showModal} tabIndex={3}>
                        <img
                            src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1192,w_2122,x_0,y_74/f_auto,q_auto,w_1100/v1575329078/shape/mentalfloss/609640-gettyimages-802480150.jpg"
                            alt="Фотограция питомца"
                        />
                    </switch>
                </figure>
                <figure className="image">
                    <switch onClick={showModal} onKeyDown={showModal} tabIndex={4}>
                        <img
                            src="https://cdn.icepop.com/wp-content/uploads/2019/08/10-Hemis-Alamy-Stock-Photo.jpg"
                            alt="Фотограция питомца"
                        />
                    </switch>
                </figure>
                <figure className="image">
                    <switch onClick={showModal} onKeyDown={showModal} tabIndex={5}>
                        <img
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/adorable-cavalier-king-charles-spaniel-puppy-royalty-free-image-523255012-1565106446.jpg?crop=0.448xw:1.00xh;0.370xw,0&resize=480:*"
                            alt="Фотограция питомца"
                        />
                    </switch>
                </figure>
            </div>
        </>
    );
};

ProfilePhotoGallery.propTypes = {
    mainPhotoUrl: PropTypes.string.isRequired,
};

export default ProfilePhotoGallery;
