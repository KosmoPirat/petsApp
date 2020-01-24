import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Header.css';

const Header = () => (
    <header className={style.header}>
        <h1 className={style.header__title}>PetsApp</h1>
        <nav className={style.header__menu}>
            <Link
                className={style.header__link}
                activeClassName={style.header__link_active}
                href="/"
            >
                Main
            </Link>
            <Link
                className={style.header__link}
                activeClassName={style.header__link_active}
                href="/pets"
            >
                Pets
            </Link>
        </nav>
    </header>
);

export default Header;
