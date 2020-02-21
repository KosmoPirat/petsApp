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
    const [isLoading, changeIsLoading] = useState(false);
    const [size, changeSize] = useState([
        {
            name: 'Маленький',
            isChecked: false,
        },
        {
            name: 'Средний',
            isChecked: false,
        },
        {
            name: 'Большой',
            isChecked: false,
        },
    ]);

    const searchParams = useMemo(
        () => ({
            searchMethods: {
                searchByName: changeNameSearchParam,
                searchBySex: changeSexSearchParam,
                searchBySize: changeSizeSearchParam,
                changeSize,
            },
            searchValues: {
                isLoading,
                size,
            },
        }),
        [changeNameSearchParam, changeSexSearchParam, changeSizeSearchParam, changeSize, isLoading]
    );

    useEffect(() => {
        const requestParams = {
            'fields.name[match]': nameSearchParam,
            'fields.size[in]': sizeSearchParam,
            'fields.sex': sexSearchParam,
        };
        changeIsLoading(true);
        contentfulClient.getFilteredPetsList(requestParams).then(pets => {
            changePetItems(pets.items);
            changeIsLoading(false);
        });
    }, [nameSearchParam, sexSearchParam, sizeSearchParam, size]);

    useEffect(() => {
        Document.setTitle('Наши питомцы');
    }, []);

    return (
        <div className={style['pets-layout']}>
            <SearchParamContext.Provider value={searchParams}>
                <PetsFilterLayout />
            </SearchParamContext.Provider>
            {!isLoading ? (
                <PetsGrid petsList={petItems} searchRequest={nameSearchParam} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PetsLayout;
