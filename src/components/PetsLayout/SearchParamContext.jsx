import { createContext } from 'preact';

const SearchParamContext = createContext({
    name: undefined,
    sex: undefined,
    size: undefined,
});
export default SearchParamContext;
