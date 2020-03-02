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
    const isValid = inputValue => {
        if (inputValue === undefined || inputValue === '') return '';
        if (inputValue.length > 1) return 'is-success';
        return 'is-danger';
    };
    return (
        <div className={style['pet-name-search-input']}>
            <h5 className="title is-5">Кличка</h5>
            <div className={`control ${searchParam.searchValues.isLoading ? 'is-loading' : ''}`}>
                <input
                    className={`input ${isValid(input.current.value)}`}
                    type="text"
                    placeholder="Введите кличку питомца"
                    ref={input}
                    onInput={onChange}
                />
            </div>
        </div>
    );
};

export default PetNameSearchInput;
