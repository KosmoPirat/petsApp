import { h } from 'preact';
import PropTypes from 'prop-types';

import { Link } from 'preact-router/match';

const PetPaginationItem = ({ isCurrent, pageNumber, changePage }) => {
    return (
        <li>
            <Link
                href={`/pets?page=${pageNumber}`}
                className={isCurrent ? 'pagination-link is-current' : 'pagination-link'}
                aria-label={`Page ${pageNumber}`}
                onClick={() => changePage(pageNumber)}
            >
                {pageNumber}
            </Link>
        </li>
    );
};

PetPaginationItem.propTypes = {
    isCurrent: PropTypes.bool.isRequired,
    pageNumber: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
};

export default PetPaginationItem;
