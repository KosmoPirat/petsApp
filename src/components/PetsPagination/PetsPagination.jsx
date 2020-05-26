import { h } from 'preact';
import { useState } from 'preact/hooks';

import PropTypes from 'prop-types';

import PetsPaginationItem from '../PetPaginationItem/PetPaginationItem';

import style from './PetsPagination.css';

const PetsPagination = ({ currentPage, totalPages, itemsPerPage, changeCurrentPage }) => {
    let startPage = 1;
    const pageList = [];
    const total = Math.floor(totalPages - 1 / itemsPerPage) + 1;
    const groupCount = 5;

    if (currentPage >= groupCount) {
        startPage = currentPage - 2;
    }

    if (currentPage < groupCount) {
        startPage = 1;
    }

    if (currentPage === 1) {
        startPage = 1;
    }

    if (total <= 10) {
        for (let i = 1; i <= total; i++) {
            pageList.push(
                <PetsPaginationItem
                    page={currentPage}
                    pageNumber={i}
                    changePage={changeCurrentPage}
                />
            );
        }
    } else {
        pageList.push(
            <PetsPaginationItem page={currentPage} pageNumber={1} changePage={changeCurrentPage} />
        );

        let pageLength = 0;
        if (groupCount + startPage > total) {
            pageLength = total;
        } else {
            pageLength = groupCount + startPage;
        }

        if (currentPage >= groupCount) {
            pageList.push(<PetsPaginationItem isDelimiter={true} />);
        }

        for (let i = startPage; i < pageLength; i++) {
            if (i <= total - 1 && i > 1) {
                pageList.push(
                    <PetsPaginationItem
                        page={currentPage}
                        pageNumber={i}
                        changePage={changeCurrentPage}
                    />
                );
            }
        }

        if (total - startPage >= groupCount + 1) {
            pageList.push(<PetsPaginationItem isDelimiter={true} />);
        }
        pageList.push(
            <PetsPaginationItem
                page={currentPage}
                pageNumber={total}
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
            <ul className="pagination-list">{pageList}</ul>
        </nav>
    );
};

PetsPagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    changeCurrentPage: PropTypes.func.isRequired,
};

export default PetsPagination;
