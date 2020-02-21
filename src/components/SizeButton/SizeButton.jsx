import { h } from 'preact';
import { useContext } from 'preact/hooks';
import PropTypes from 'prop-types';
import SearchParamContext from '../PetsLayout/SearchParamContext';

const SizeButton = ({ name, isChecked }) => {
    const searchParam = useContext(SearchParamContext);
    const changeSize = () => {
        const newSize = searchParam.searchValues.size.map(item =>
            item.name === name
                ? { name: item.name, isChecked: !item.isChecked }
                : { name: item.name, isChecked: item.isChecked }
        );
        console.log(newSize);
        searchParam.searchMethods.changeSize(newSize);
    };
    return (
        <p className="control">
            <button
                className={`button is-small is-rounded ${isChecked ? 'is-link' : 'is-info'}`}
                type="button"
                onClick={changeSize}
            >
                <span>{name}</span>
            </button>
        </p>
    );
};

SizeButton.propTypes = {
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
};

export default SizeButton;
