import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import PropTypes from 'prop-types';
import { route } from 'preact-router';
import contentfulClient from '../../helpers/contentful/contentfulClient';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfilePhotoGallery from '../ProfilePhotoGallery/ProfilePhotoGallery';

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
        });
    }, []);

    if (!isPetLoaded) {
        return null;
    }

    const { name, sex, size, description } = pet.fields;

    return (
        <>
            <ProfileCard name={name} sex={sex} size={size} description={description} />
            <ProfilePhotoGallery mainPhotoUrl={pet.fields.mainPhoto.fields.file.url} />
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
