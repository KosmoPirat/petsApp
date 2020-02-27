import { createContext } from 'preact';

const SearchParamContext = createContext({
    searchMethods: {
        searchByName: undefined,
        searchBySex: undefined,
        searchBySize: undefined,
    },
    searchValues: {
        isLoading: false,
        sizeSearchParam: [],
    },
});
export default SearchParamContext;
