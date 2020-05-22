import { h } from 'preact';
import PropTypes from 'prop-types';

import { Link } from 'preact-router/match';

const PetPaginationItem = ({ page, pageNumber, changePage, isDelimiter }) => {
    if (isDelimiter) {
        return (
            <li>
                <span class="pagination-ellipsis">&hellip;</span>
            </li>
        );
    } else {
        return (
            <li>
                <Link
                    href={`/pets?page=${pageNumber}`}
                    className={
                        page === pageNumber ? 'pagination-link is-current' : 'pagination-link'
                    }
                    aria-label={`Page ${pageNumber}`}
                    onClick={() => changePage(pageNumber)}
                >
                    {pageNumber}
                </Link>
            </li>
        );
    }
};

PetPaginationItem.propTypes = {
    page: PropTypes.number,
    pageNumber: PropTypes.number,
    changePage: PropTypes.func,
    isDelimiter: PropTypes.bool,
};

export default PetPaginationItem;
