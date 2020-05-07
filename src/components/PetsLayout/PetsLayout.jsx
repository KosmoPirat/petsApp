import { h } from 'preact';
import { useEffect, useState, useMemo } from 'preact/hooks';

import SearchParamContext from './SearchParamContext';
import PaginationContext from './PaginationContext';
import contentfulClient from '../../helpers/contentful/contentfulClient';
import Document from '../../helpers/documentHelper';
import Mappers from '../../helpers/mappers';
import Utils from '../../helpers/utils';

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

    const [currentPage, chengeCurrentPage] = useState(0);

    const pagePetsLimit = 4;

    const paginationParams = useMemo(
        () => ({
            paginationMethods: {
                changePage: chengeCurrentPage,
            },
            paginationValues: {
                currentPage,
            },
        }),
        [chengeCurrentPage]
    );

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
        const sizeParam = Mappers.mapToStringRequestParams(sizeSearchParam);
        const sexParam = Mappers.mapToStringRequestParams(sexSearchParam);
        const urlParam = Mappers.mapUrlParam(window.location.href);
        const skipParam = Utils.getSkipParam(petItems.length, currentPage * pagePetsLimit);
        if (urlParam) {
            chengeCurrentPage(urlParam);
        }

        const requestParams = {
            'fields.name[match]': nameSearchParam,
            'fields.size[in]': sizeParam,
            'fields.sex[in]': sexParam,
            limit: pagePetsLimit,
            skip: skipParam,
        };
        changeIsLoading(true);
        contentfulClient.getFilteredPetsList(requestParams).then(pets => {
            changePetItems(pets.items);
            changeIsLoading(false);
        });
    }, [nameSearchParam, sexSearchParam, sizeSearchParam, currentPage]);

    useEffect(() => {
        Document.setTitle('Наши питомцы');
    }, []);

    return (
        <div className={style['pets-layout']}>
            <SearchParamContext.Provider value={searchParams}>
                <PetsFilterLayout />
            </SearchParamContext.Provider>
            <PaginationContext.Provider value={paginationParams}>
                <PetsGrid petsList={petItems} searchRequest={nameSearchParam} />
            </PaginationContext.Provider>
        </div>
    );
};

export default PetsLayout;
