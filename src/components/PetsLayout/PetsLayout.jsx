import { h } from 'preact';

import { useEffect, useState } from 'preact/hooks';
import PetsGrid from '../PetsGrid/PetsGrid';
import PetsFilterLayout from '../PetsFilterLayout/PetsFilterLayout';
import SearchParamContext from './SearchParamContext';

import style from './PetsLayout.css';
import contentfulClient from '../../helpers/contentful/contentfulClient';

const PetsLayout = () => {
    const [petItems, changePetItems] = useState([]);
    const [searchByName, changeSearchByName] = useState('');
    const [searchBySex, changeSearchBySex] = useState('');
    const [searchBySize, changeSearchBySize] = useState('');
    const [arePetsLoaded, changeArePetsLoaded] = useState(false);
    const searchParams = {
        name: changeSearchByName,
        sex: changeSearchBySex,
        size: changeSearchBySize,
    };

    useEffect(() => {
        const param = {
            'fields.name[match]': searchByName,
            'fields.size': searchBySize,
            'fields.sex': searchBySex,
        };

        contentfulClient.getFilteredPetsList(param).then(pets => {
            changePetItems(pets.items);
            changeArePetsLoaded(true);
        });
    }, [searchByName, searchBySex, searchBySize]);

    return (
        <div className={style['pets-layout']}>
            <SearchParamContext.Provider value={searchParams}>
                <PetsFilterLayout />
            </SearchParamContext.Provider>
            {arePetsLoaded ? <PetsGrid petsList={petItems} /> : <div>Loading...</div>}
        </div>
    );
};

export default PetsLayout;
