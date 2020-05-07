import { h } from 'preact';
import { Link } from 'preact-router/match';

const PetsPagination = () => {
    return (
        <nav className="pagination is-centered is-small" role="navigation" aria-label="pagination">
            <Link href="*" class="pagination-previous">
                Previous
            </Link>
            <Link href="*" class="pagination-next">
                Next page
            </Link>
            <ul className="pagination-list">
                <li>
                    <Link href="*" class="pagination-link" aria-label="Goto page 1">
                        1
                    </Link>
                </li>
                <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <Link href="*" class="pagination-link" aria-label="Goto page 45">
                        45
                    </Link>
                </li>
                <li>
                    <Link
                        href="*"
                        class="pagination-link is-current"
                        aria-label="Page 46"
                        aria-current="page"
                    >
                        46
                    </Link>
                </li>
                <li>
                    <Link href="*" class="pagination-link" aria-label="Goto page 47">
                        47
                    </Link>
                </li>
                <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <Link href="*" class="pagination-link" aria-label="Goto page 86">
                        86
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default PetsPagination;
