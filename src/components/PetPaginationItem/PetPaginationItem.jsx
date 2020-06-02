import { h } from 'preact';
import PropTypes from 'prop-types';

import { Link } from 'preact-router/match';

const PetPaginationItem = ({ isCurrent, pageNumber, changePage, isDelimiter }) => {
    // TODO: Вынести в отдельный компонент
    if (isDelimiter) {
        return (
            <li>
                <span className="pagination-ellipsis">&hellip;</span>
            </li>
        );
    }

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
    isCurrent: PropTypes.bool,
    pageNumber: PropTypes.number,
    changePage: PropTypes.func,
    isDelimiter: PropTypes.bool,
};

// После выноса delimeter в отдельный компонент все пропсы сделать обязательными, дефолтные значения удалить
PetPaginationItem.defaultProps = {
    isCurrent: false,
    pageNumber: 0,
    changePage: () => {},
    isDelimiter: false,
};

export default PetPaginationItem;
