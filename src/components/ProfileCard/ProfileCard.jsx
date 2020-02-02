import { h } from 'preact';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'preact/hooks';
import style from './ProfileCard.css';
import Utils from '../../helpers/utils';

const ProfileCard = ({ name, sex, size, description, volunteer }) => {
    const [contactsShown, changeShowContacts] = useState(false);

    const showContacts = useCallback(() => {
        changeShowContacts(true);
    });

    return (
        <div className="box">
            <h1 className={`title is-1 ${style['profile-card__name']}`}>{name}</h1>

            <div className={style['profile-card__description']}>
                <p className="subtitle is-5">{description}</p>
                {volunteer && !contactsShown && (
                    <button
                        className="button is-rounded is-info"
                        onClick={showContacts}
                        onKeyPress={showContacts}
                        type="button"
                    >
                        Показать контакты
                    </button>
                )}
                {volunteer && contactsShown && (
                    <p className={`subtitle is-5 ${style['profile-card__contacts']}`}>
                        <a href={`tel:+${volunteer.fields.phone}`}>
                            {Utils.formatPhone(volunteer.fields.phone)}
                        </a>
                        <strong>{` ${volunteer.fields.name}`}</strong>
                    </p>
                )}
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
};

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    description: PropTypes.string,
    volunteer: PropTypes.shape({
        fields: PropTypes.shape({
            name: PropTypes.string,
            phone: PropTypes.number,
        }),
    }),
};

ProfileCard.defaultProps = {
    description: '',
    volunteer: undefined,
};

export default ProfileCard;
