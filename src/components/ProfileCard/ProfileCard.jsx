import { h } from 'preact';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'preact/hooks';
import style from './ProfileCard.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import VolunteerInfo from '../VolunteerInfo/VolunteerInfo';

const ProfileCard = ({ name, sex, size, description, volunteer, mainPhotoUrl }) => {
    const [contactsShown, changeShowContacts] = useState(false);

    const showContacts = useCallback(() => {
        changeShowContacts(true);
    });

    return (
        <div className="box">
            <div className={style['profile-card__layout']}>
                <figure className={`image ${style['profile-card__avatar-image']}`}>
                    <img src={mainPhotoUrl} alt="Фотография питомца" />
                </figure>

                <div>
                    <div className={style['profile-card__description']}>
                        <div>
                            <h1 className="title is-1">{name}</h1>

                            <p className="subtitle is-5">{description}</p>
                        </div>
                        <div className={style['profile-card__row']}>
                            <VolunteerInfo
                                volunteer={volunteer}
                                contactsShown={contactsShown}
                                showContacts={showContacts}
                            />
                            <SocialMedia />
                        </div>
                    </div>
                </div>
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
    mainPhotoUrl: PropTypes.string.isRequired,
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
