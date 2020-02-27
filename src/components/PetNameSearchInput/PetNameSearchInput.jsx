import { h } from 'preact';

import { useRef, useContext, useCallback } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';
import Utils from '../../helpers/utils';

import style from './PetNameSearchInput.css';

const PetNameSearchInput = () => {
    const input = useRef('');
    const searchParam = useContext(SearchParamContext);
    const onChange = useCallback(
        Utils.throttle(() => {
            searchParam.searchMethods.searchByName(input.current.value);
        }, 1000),
        [input]
    );
    return (
        <div
            className={`control ${style['pet-name-search-input']} ${
                searchParam.searchValues.isLoading ? 'is-loading' : ''
            }`}
        >
            <input
                className="input"
                type="text"
                placeholder="Введите кличку питомца"
                ref={input}
                onInput={onChange}
            />
            {input.current.value ? (
                <span className="size-7 has-text-danger">
                    Поиск осуществяется при вводе не менее двух символов!
                </span>
            ) : (
                ''
            )}
        </div>
    );
};

export default PetNameSearchInput;
