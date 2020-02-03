import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import PropTypes from 'prop-types';
import { route } from 'preact-router';
import contentfulClient from '../../helpers/contentful/contentfulClient';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfilePhotoGallery from '../ProfilePhotoGallery/ProfilePhotoGallery';
import Document from '../../helpers/documentHelper';

const PetProfileLayout = ({ slug }) => {
    const [pet, changePet] = useState(false);
    const [isPetLoaded, changeIsPetLoaded] = useState(false);

    useEffect(() => {
        contentfulClient.getPetBySlug(slug).then(petFromApi => {
            if (petFromApi === undefined) {
                route('/unknown-pet', true);
            }

            changePet(petFromApi);
            changeIsPetLoaded(true);
            Document.setTitle(petFromApi.fields.name);
        });
    }, []);

    if (!isPetLoaded) {
        return null;
    }

    const {
        name,
        sex,
        size,
        description,
        mainPhoto,
        additionalPhotos,
        youtubeEmbeddingCode,
        volunteer,
    } = pet.fields;

    return (
        <>
            <ProfileCard
                name={name}
                sex={sex}
                size={size}
                description={description}
                volunteer={volunteer}
                mainPhotoUrl={mainPhoto.fields.file.url}
            />
            <ProfilePhotoGallery
                mainPhotoUrl={mainPhoto.fields.file.url}
                additionalPhotos={additionalPhotos}
                youtubeEmbeddingCode={youtubeEmbeddingCode}
            />
        </>
    );
};

PetProfileLayout.propTypes = {
    slug: PropTypes.string,
};

PetProfileLayout.defaultProps = {
    slug: '',
};

export default PetProfileLayout;
