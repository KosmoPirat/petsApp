import { h } from 'preact';

import { useContext } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';
import SizeButton from '../SizeButton/SizeButton';

import style from './SizeButtonsSearch.css';

const SizeButtonsSearch = () => {
    const searchParam = useContext(SearchParamContext);

    return (
        <>
            <p className={`${style['size-buttons-search__title']} has-text-grey`}>
                Выберите размер питомца
            </p>
            <div className="field has-addons">
                {searchParam.searchValues.sizeSearchParam.map((searchButton, index) => (
                    <SizeButton sizeIndex={index} />
                ))}
            </div>
        </>
    );
};

export default SizeButtonsSearch;
