import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import contentfulClient from '../../helpers/contentful/contentfulClient';
import GridCard from '../GridCard/GridCard';

import style from './PetsGrid.css';

const PetsGrid = () => {
    const [petItems, changePetItems] = useState([]);
    const [arePetsLoaded, changeArePetsLoaded] = useState(false);

    useEffect(() => {
        contentfulClient.getAllPets().then(pets => {
            changePetItems(pets.items);
            changeArePetsLoaded(true);
        });
    }, []);

    if (!arePetsLoaded) {
        return null;
    }

    return (
        <section className={style['pets-grid']}>
            {petItems.map(pet => (
                <GridCard
                    slug={pet.fields.slug}
                    name={pet.fields.name}
                    mainPhoto={pet.fields.mainPhoto}
                />
            ))}
        </section>
    );
};

export default PetsGrid;
