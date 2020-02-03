import { h } from 'preact';

import { useRef, useContext, useCallback } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';
import Utils from '../../helpers/utils';

const PetNameSearchInput = () => {
    const input = useRef('');
    const searchParam = useContext(SearchParamContext);
    console.log(`render ${searchParam.searchValues.isLoading}`);
    const onChange = useCallback(
        Utils.throttle(() => {
            searchParam.searchMethods.searchByName(input.current.value);
        }, 1000),
        [input]
    );
    return (
        <div className={`control ${searchParam.searchValues.isLoading ? 'is-loading' : ''}`}>
            <input
                className="input"
                type="text"
                placeholder="Введите имя питомца"
                ref={input}
                onInput={onChange}
            />
        </div>
    );
};

export default PetNameSearchInput;
