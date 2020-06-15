import { createContext } from 'preact';

const SearchParamContext = createContext({
    searchMethods: {
        searchByName: undefined,
        searchBySex: undefined,
        searchBySize: undefined,
    },
    searchValues: {
        sexSearchParam: [],
        sizeSearchParam: [],
        isLoading: false,
    },
});
export default SearchParamContext;
