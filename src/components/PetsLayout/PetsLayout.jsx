import { h } from 'preact';
import { useEffect, useState, useMemo } from 'preact/hooks';

import SearchParamContext from './SearchParamContext';
import contentfulClient from '../../helpers/contentful/contentfulClient';
import Document from '../../helpers/documentHelper';
import Mappers from '../../helpers/mappers';

import PetsGrid from '../PetsGrid/PetsGrid';
import PetsFilterLayout from '../PetsFilterLayout/PetsFilterLayout';

import style from './PetsLayout.css';

const PetsLayout = () => {
    const [petItems, changePetItems] = useState([]);
    const [nameSearchParam, changeNameSearchParam] = useState('');
    const [sexSearchParam, changeSexSearchParam] = useState([
        {
            name: 'Мальчик',
            isChecked: false,
        },
        {
            name: 'Девочка',
            isChecked: false,
        },
    ]);
    const [sizeSearchParam, changeSizeSearchParam] = useState([
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
    const [isLoading, changeIsLoading] = useState(false);

    const searchParams = useMemo(
        () => ({
            searchMethods: {
                searchByName: changeNameSearchParam,
                searchBySex: changeSexSearchParam,
                searchBySize: changeSizeSearchParam,
            },
            searchValues: {
                isLoading,
                sexSearchParam,
                sizeSearchParam,
            },
        }),
        [changeNameSearchParam, changeSexSearchParam, changeSizeSearchParam, isLoading]
    );

    useEffect(() => {
        const sizeParam = Mappers.mapToSizeRequestParams(sizeSearchParam);
        const sexParam = Mappers.mapToSizeRequestParams(sexSearchParam);
        const requestParams = {
            'fields.name[match]': nameSearchParam,
            'fields.size[in]': sizeParam,
            'fields.sex[in]': sexParam,
        };
        changeIsLoading(true);
        contentfulClient.getFilteredPetsList(requestParams).then(pets => {
            changePetItems(pets.items);
            changeIsLoading(false);
        });
    }, [nameSearchParam, sexSearchParam, sizeSearchParam]);

    useEffect(() => {
        Document.setTitle('Наши питомцы');
    }, []);

    return (
        <div className={style['pets-layout']}>
            <SearchParamContext.Provider value={searchParams}>
                <PetsFilterLayout />
            </SearchParamContext.Provider>
            <PetsGrid petsList={petItems} searchRequest={nameSearchParam} />
        </div>
    );
};

export default PetsLayout;
