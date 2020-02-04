import { createContext } from 'preact';

const SearchParamContext = createContext({
    searchMethods: {
        searchByName: undefined,
        searchBySex: undefined,
        searchBySize: undefined,
        changeIsLoading: undefined,
    },
    searchValues: {
        changeIsLoading: false,
    },
});
export default SearchParamContext;
