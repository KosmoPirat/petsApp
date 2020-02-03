import { h } from 'preact';
import { useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';

const ProfileAdditionalPhoto = ({ indexKey, file, height, onImageClick }) => {
    const width = useMemo(() => file.details.image.width / (file.details.image.height / height));

    return (
        <figure key={indexKey}>
            <switch onClick={onImageClick} onKeyDown={onImageClick}>
                <img style={{ width }} src={file.url} alt="Фотография питомца" />
            </switch>
        </figure>
    );
};

ProfileAdditionalPhoto.propTypes = {
    indexKey: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onImageClick: PropTypes.func.isRequired,
    file: PropTypes.shape({
        url: PropTypes.string,
        details: PropTypes.shape({
            image: PropTypes.shape({
                height: PropTypes.number,
                width: PropTypes.number,
            }),
        }),
    }).isRequired,
};

export default ProfileAdditionalPhoto;
