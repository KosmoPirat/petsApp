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
    const [nameSearchParam, changeNameSearchParam] = useState('');
    const [sexSearchParam, changeSexSearchParam] = useState('');
    const [sizeSearchParam, changeSizeSearchParam] = useState('');
    const [arePetsLoaded, changeArePetsLoaded] = useState(false);
    const [isRequestLoading, changeIsRequestLoading] = useState(false);
    const searchParams = useMemo(
        () => ({
            searchMethods: {
                searchByName: changeNameSearchParam,
                searchBySex: changeSexSearchParam,
                searchBySize: changeSizeSearchParam,
            },
            searchValues: {
                isLoading: isRequestLoading,
            },
        }),
        [changeNameSearchParam, changeSexSearchParam, changeSizeSearchParam, isRequestLoading]
    );

    useEffect(() => {
        const requestParams = {
            'fields.name[match]': nameSearchParam,
            'fields.size': sizeSearchParam,
            'fields.sex': sexSearchParam,
        };

        contentfulClient.getFilteredPetsList(requestParams).then(pets => {
            changePetItems(pets.items);
            changeArePetsLoaded(true);
            changeIsRequestLoading(true);
        });
        changeIsRequestLoading(false);
    }, [nameSearchParam, sexSearchParam, sizeSearchParam]);
    useEffect(() => {
        Document.setTitle('Наши питомцы');
    }, []);

    return (
        <div className={style['pets-layout']}>
            <SearchParamContext.Provider value={searchParams}>
                <PetsFilterLayout />
            </SearchParamContext.Provider>
            {arePetsLoaded ? (
                <PetsGrid petsList={petItems} searchRequest={nameSearchParam} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PetsLayout;
