import { h } from 'preact';
import { Link } from 'preact-router/match';

import adoptionIcon from './adoption.svg';
import style from './Header.css';

const Header = () => (
    <nav className={`navbar ${style.header}`} role="navigation" aria-label="main navigation">
        <div className={`${style.header__logo}`}>
            <img src={adoptionIcon} className={`${style[`header__logo-image`]}`} alt="Логотип" />
            <div className="title is-3">Приют собак</div>
        </div>

        <div className={`navbar-menu ${style.header__menu}`}>
            <div className={`navbar-item ${style.header__item} ${style.header__item_disabled}`}>
                Главная
            </div>
            <Link
                className={`navbar-item ${style.header__item}`}
                activeClassName={style.header__link_active}
                href="/pets"
            >
                Наши питомцы
            </Link>
            <div className={`navbar-item ${style.header__item} ${style.header__item_disabled}`}>
                Новости
            </div>
            <div className={`navbar-item ${style.header__item} ${style.header__item_disabled}`}>
                О приюте
            </div>
        </div>
    </nav>
);

export default Header;
