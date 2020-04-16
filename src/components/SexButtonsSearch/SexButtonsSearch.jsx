import { h } from 'preact';

import { useContext } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';
import SexButton from '../SexButton/SexButton';

import style from './SexButtonsSearch.css';

const SexButtonsSearch = () => {
    const searchParam = useContext(SearchParamContext);

    return (
        <>
            <h5 className={`title is-5 ${style['sex-buttons-search__title']}`}>Пол</h5>
            <div className="field has-addons">
                {searchParam.searchValues.sexSearchParam.map((searchButton, index) => (
                    <SexButton sexIndex={index} />
                ))}
            </div>
        </>
    );
};

export default SexButtonsSearch;
