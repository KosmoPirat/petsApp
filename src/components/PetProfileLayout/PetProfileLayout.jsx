import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import PropTypes from 'prop-types';
import { route } from 'preact-router';
import contentfulClient from '../../helpers/contentful/contentfulClient';

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

    return (
        <>
            <div className="content is-medium">
                <h1>{pet.fields.name}</h1>
                <p>
                    <strong>Пол: </strong>
                    {pet.fields.sex}
                    <br />
                    <strong>Размер: </strong>
                    {pet.fields.size}
                </p>
                <p>{pet.fields.description}</p>
            </div>
            <figure className="image column is-half is-offset-one-quarter">
                <img
                    src={pet.fields.mainPhoto.fields.file.url}
                    alt={`Фотограция питомца ${pet.fields.name}`}
                />
            </figure>
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
