import { h } from 'preact';

import { useContext, useEffect } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';
import SizeButton from '../SizeButton/SizeButton';

import style from './SizeButtonsSearch.css';

import mapToSizeRequestParams from '../../helpers/mappers';

const SizeButtonsSearch = () => {
    const searchParam = useContext(SearchParamContext);
    useEffect(() => {
        const request = mapToSizeRequestParams(searchParam.searchValues.size);
        searchParam.searchMethods.searchBySize(request);
    }, [searchParam.searchValues.size]);

    return (
        <>
            <p className={`${style['size-buttons-search__title']} has-text-grey`}>
                Выберите размер питомца
            </p>
            <div className="field has-addons">
                {searchParam.searchValues.size.map((searchButton, index) => (
                    <SizeButton sizeIndex={index} />
                ))}
            </div>
        </>
    );
};

export default SizeButtonsSearch;
