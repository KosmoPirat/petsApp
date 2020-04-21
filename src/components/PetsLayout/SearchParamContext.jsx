import { createContext } from 'preact';

const SearchParamContext = createContext({
    searchMethods: {
        searchByName: undefined,
        searchBySex: undefined,
        searchBySize: undefined,
    },
    searchValues: {
        isLoading: false,
        sexSearchParam: [],
        sizeSearchParam: [],
    },
});
export default SearchParamContext;
