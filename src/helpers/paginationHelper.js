class PaginationHelper {
    static getStartPage = (currPage, groupCount) => {
        let startPage;

        if (currPage >= groupCount) {
            startPage = currPage - 2;
        }

        if (currPage < groupCount) {
            startPage = 1;
        }

        if (currPage === 1) {
            startPage = 1;
        }
        return startPage;
    };
}

export default PaginationHelper;
