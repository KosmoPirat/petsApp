import { h } from 'preact';

import { useRef, useContext, useState } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';

const PetNameSearchInput = () => {
    const input = useRef('');
    const searchBy = useContext(SearchParamContext);
    const [isLoading, changeIsLoading] = useState(false);
    const onChange = () => {
        changeIsLoading(true);
        setTimeout(() => {
            searchBy.name(input.current.value);
            changeIsLoading(false);
        }, 1000);
    };

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
