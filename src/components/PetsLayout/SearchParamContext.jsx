import { createContext } from 'preact';

const SearchParamContext = createContext({
    searchMethods: {
        searchByName: undefined,
        searchBySex: undefined,
        searchBySize: undefined,
    },
    searchValues: {
        changeIsLoading: false,
    },
});
export default SearchParamContext;
