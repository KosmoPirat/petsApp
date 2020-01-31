import { h } from 'preact';

import { useRef, useContext, useState, useCallback } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';
import throttle from '../../helpers/utils/throttleFunction';

const PetNameSearchInput = () => {
    const input = useRef('');
    const searchBy = useContext(SearchParamContext);
    const [isLoading, changeIsLoading] = useState(false);
    const onChange = useCallback(
        throttle(
            () => {
                changeIsLoading(true);
                searchBy.name(input.current.value);
            },
            1000,
            changeIsLoading
        ),
        [input]
    );

    return (
        <div className={`control ${isLoading ? 'is-loading' : ''}`}>
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
