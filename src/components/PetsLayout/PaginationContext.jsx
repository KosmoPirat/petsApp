import { createContext } from 'preact';

const PaginationContext = createContext({
    paginationMethods: {
        changePage: undefined,
    },
    paginationValues: {
        paginationStep: 0,
        pageItemsLimit: 0,
        currentPage: 0,
    },
});
export default PaginationContext;
