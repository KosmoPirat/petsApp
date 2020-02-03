import { h } from 'preact';
import PropTypes from 'prop-types';
import Utils from '../../helpers/utils';

const VolunteerInfo = ({ volunteer, contactsShown, showContacts }) => {
    if (!volunteer) {
        return <div />;
    }

    if (!contactsShown) {
        return (
            <button
                className="button is-rounded is-info"
                onClick={showContacts}
                onKeyPress={showContacts}
                type="button"
            >
                Показать контакты
            </button>
        );
    }

    return (
        <p>
            <a href={`tel:+${volunteer.fields.phone}`}>
                {Utils.formatPhone(volunteer.fields.phone)}
            </a>
            <strong>{` ${volunteer.fields.name}`}</strong>
        </p>
    );
};

VolunteerInfo.propTypes = {
    contactsShown: PropTypes.bool.isRequired,
    showContacts: PropTypes.func.isRequired,
    volunteer: PropTypes.shape({
        fields: PropTypes.shape({
            name: PropTypes.string,
            phone: PropTypes.number,
        }),
    }),
};

VolunteerInfo.defaultProps = {
    volunteer: undefined,
};

export default VolunteerInfo;
