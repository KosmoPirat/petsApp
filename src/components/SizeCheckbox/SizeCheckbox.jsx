import { h } from 'preact';
import PropTypes from 'prop-types';

const SizeCheckbox = ({ name, value, isChecked, onChangeHandler }) => {
    const onChange = e => {
        if (!isChecked) {
            e.target.value = value;
        } else {
            e.target.value = '';
        }
        onChangeHandler({
            isChecked: !isChecked,
            value: e.target.value,
        });
    };

    return (
        <label htmlFor={name} className="checkbox">
            <input id={name} type="checkbox" onChange={onChange} checked={isChecked} />
            {value}
        </label>
    );
};

SizeCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
};

export default SizeCheckbox;
