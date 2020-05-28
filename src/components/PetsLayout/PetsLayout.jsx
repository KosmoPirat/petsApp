import { h } from 'preact';
import { useEffect, useState, useMemo } from 'preact/hooks';

import SearchParamContext from './SearchParamContext';
import contentfulClient from '../../helpers/contentful/contentfulClient';
import Document from '../../helpers/documentHelper';
import Mappers from '../../helpers/mappers';
import Utils from '../../helpers/utils';

import PetsGrid from '../PetsGrid/PetsGrid';
import PetsFilterLayout from '../PetsFilterLayout/PetsFilterLayout';
import PetsPagination from '../PetsPagination/PetsPagination';

import style from './PetsLayout.css';

const PetsLayout = () => {
    const [petData, changePetsData] = useState({
        petItems: 0,
        totalPetItems: 0,
    });

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

    const defaultCurPage = Mappers.mapUrlParam(window.location.href);
    const [currentPage, changeCurrentPage] = useState(defaultCurPage);

    const petItemsPerPage = 1;

    const searchParams = useMemo(
        () => ({
            searchMethods: {
                searchByName: changeNameSearchParam,
                searchBySex: changeSexSearchParam,
                searchBySize: changeSizeSearchParam,
            },
            searchValues: {
                sexSearchParam,
                sizeSearchParam,
                isLoading,
            },
        }),
        [changeNameSearchParam, changeSexSearchParam, changeSizeSearchParam, isLoading]
    );

    useEffect(() => {
        const sizeParam = Mappers.mapToStringRequestParams(sizeSearchParam);
        const sexParam = Mappers.mapToStringRequestParams(sexSearchParam);
        const skipParam = Utils.multiplyDigits(currentPage - 1, petItemsPerPage);

        const requestParams = {
            'fields.name[match]': nameSearchParam,
            'fields.size[in]': sizeParam,
            'fields.sex[in]': sexParam,
            limit: petItemsPerPage,
            skip: skipParam,
        };
        changeIsLoading(true);
        contentfulClient.getFilteredPetsList(requestParams).then(pets => {
            const data = {
                petItems: pets.items,
                totalPetItems: pets.total,
            };
            changePetsData(data);
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
            <PetsGrid petsList={petData.petItems} searchRequest={nameSearchParam} />
            {petData.totalPetItems < 3 ? (
                ''
            ) : (
                <PetsPagination
                    currentPage={currentPage}
                    totalPages={petData.totalPetItems}
                    itemsPerPage={petItemsPerPage}
                    changeCurrentPage={changeCurrentPage}
                />
            )}
        </div>
    );
};

export default PetsLayout;
