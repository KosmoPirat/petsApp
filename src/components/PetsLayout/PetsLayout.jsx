import { h } from 'preact';

import { useEffect, useState } from 'preact/hooks';
import PetsGrid from '../PetsGrid/PetsGrid';
import PetsFilter from '../PetsFilter/PetsFilter';

import style from './PetsLayout.css';
import contentfulClient from '../../helpers/contentful/contentfulClient';

const PetsLayout = () => {
    const [petItems, changePetItems] = useState([]);
    const [arePetsLoaded, changeArePetsLoaded] = useState(false);

    useEffect(() => {
        contentfulClient.getAllPets().then(pets => {
            changePetItems(pets.items);
            changeArePetsLoaded(true);
        });
    }, []);

    return (
        <div className={style['pets-layout']}>
            <PetsFilter />
            {arePetsLoaded ? <PetsGrid petsList={petItems} /> : <div>Loading...</div>}
        </div>
    );
};

export default PetsLayout;
