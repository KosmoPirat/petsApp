import { h } from 'preact';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './ProfileCard.css';

const ProfileCard = ({ name, sex, size, description }) => (
    <div className="box">
        <h1 className={classNames('title is-1', style['profile-card__name'])}>{name}</h1>

        <div className={style['profile-card__description']}>
            <p className="subtitle is-5">{description}</p>
        </div>

        <hr />

        <nav className="level">
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Пол</p>
                    <p className="title is-4">{sex}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Размер</p>
                    <p className="title is-4">{size}</p>
                </div>
            </div>
        </nav>
    </div>
);

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    description: PropTypes.string,
};

ProfileCard.defaultProps = {
    description: '',
};

export default ProfileCard;
