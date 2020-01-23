import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Header.css';

const Header = () => (
    <header className={style.header}>
        <h1>PetsApp</h1>
        <nav>
            <Link activeClassName={style.header__link_active} href="/">
                Main
            </Link>
            <Link activeClassName={style.header__link_active} href="/pets">
                Pets
            </Link>
        </nav>
    </header>
);

export default Header;
