import { createContext } from 'preact';

const SearchParamContext = createContext({
    name: '',
    sex: '',
    size: '',
});
export default SearchParamContext;
