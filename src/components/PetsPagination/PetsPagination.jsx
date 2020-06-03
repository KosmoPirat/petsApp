import { h } from 'preact';

import PropTypes from 'prop-types';

import PetsPaginationItem from '../PetPaginationItem/PetPaginationItem';
import PaginationDelimiter from '../PaginationDelimeter/PaginationDelimeter';

import style from './PetsPagination.css';

const PetsPagination = ({ currentPage, totalPages, changeCurrentPage }) => {
    const pageList = [];
    const pageItemsOffset = 1;
    const currentPageIndex = currentPage - 1;
    let alreadySkipped = false;

    for (let i = 1; i <= totalPages; i++) {
        pageList.push(
            <PetsPaginationItem
                isCurrent={currentPage === i}
                pageNumber={i}
                changePage={changeCurrentPage}
            />
        );
    }

    return (
        <nav
            className={`${style['pets-pagination']} pagination is-centered is-small`}
            role="navigation"
            aria-label="pagination"
        >
            <ul className="pagination-list">
                {pageList.reduce((acc, pageItem, index) => {
                    if (
                        index === 0 ||
                        index === totalPages - 1 ||
                        (index >= currentPageIndex - pageItemsOffset &&
                            index <= currentPageIndex + pageItemsOffset)
                    ) {
                        alreadySkipped = false;
                        acc.push(pageItem);
                        return acc;
                    }

                    if (!alreadySkipped) {
                        acc.push(<PaginationDelimiter />);
                    }

                    alreadySkipped = true;

                    return acc;
                }, [])}
            </ul>
        </nav>
    );
};

PetsPagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    changeCurrentPage: PropTypes.func.isRequired,
};

export default PetsPagination;
