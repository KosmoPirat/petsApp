import { createContext } from 'preact';

const SearchParamContext = createContext({
    searchMethods: {
        searchByName: undefined,
        searchBySex: undefined,
        searchBySize: undefined,
        changeStatusLoading: undefined,
    },
    searchValues: {
        isRequestLoading: false,
    },
});
export default SearchParamContext;
