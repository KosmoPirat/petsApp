import { createContext } from 'preact';

const SearchParamContext = createContext({
    searchMethods: {
        searchByName: undefined,
        searchBySex: undefined,
        searchBySize: undefined,
        changeSize: undefined,
    },
    searchValues: {
        isLoading: false,
        size: [],
    },
});
export default SearchParamContext;
