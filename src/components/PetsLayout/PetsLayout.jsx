import { h } from 'preact';
import { useEffect, useState, useMemo } from 'preact/hooks';

import contentfulClient from '../../helpers/contentful/contentfulClient';
import SearchParamContext from './SearchParamContext';
import Document from '../../helpers/documentHelper';

import PetsGrid from '../PetsGrid/PetsGrid';
import PetsFilterLayout from '../PetsFilterLayout/PetsFilterLayout';

import style from './PetsLayout.css';

const PetsLayout = () => {
    const [petItems, changePetItems] = useState([]);
    const [searchByName, changeSearchByName] = useState('');
    const [searchBySex, changeSearchBySex] = useState('');
    const [searchBySize, changeSearchBySize] = useState('');
    const [arePetsLoaded, changeArePetsLoaded] = useState(false);
    const searchParams = useMemo(
        () => ({
            name: changeSearchByName,
            sex: changeSearchBySex,
            size: changeSearchBySize,
        }),
        [changeSearchByName, changeSearchBySex, changeSearchBySize]
    );

    useEffect(() => {
        const requestParams = {
            'fields.name[match]': searchByName,
            'fields.size': searchBySize,
            'fields.sex': searchBySex,
        };

        contentfulClient.getFilteredPetsList(requestParams).then(pets => {
            changePetItems(pets.items);
            changeArePetsLoaded(true);
        });
    }, [searchByName, searchBySex, searchBySize]);
    useEffect(() => {
        Document.setTitle('Наши питомцы');
    }, []);

    return (
        <div className={style['pets-layout']}>
            <SearchParamContext.Provider value={searchParams}>
                <PetsFilterLayout />
            </SearchParamContext.Provider>
            {arePetsLoaded ? (
                <PetsGrid petsList={petItems} searchRequest={searchByName} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PetsLayout;
