import { h } from 'preact';
import { useContext } from 'preact/hooks';
import PropTypes from 'prop-types';
import SearchParamContext from '../PetsLayout/SearchParamContext';

import style from './SizeButton.css';

const SizeButton = ({ sizeIndex }) => {
    const searchParam = useContext(SearchParamContext);
    const size = searchParam.searchValues.sizeSearchParam[sizeIndex];
    const changeSize = () => {
        const newSizes = searchParam.searchValues.sizeSearchParam.map(item =>
            item.name === size.name
                ? { name: item.name, isChecked: !item.isChecked }
                : { name: item.name, isChecked: item.isChecked }
        );
        searchParam.searchMethods.searchBySize(newSizes);
    };
    return (
        <p className="control">
            <button
                className={`button ${size.isChecked ? 'is-success' : ''}`}
                type="button"
                onClick={changeSize}
            >
                <span className={style['size-button__text']}>{size.name}</span>
            </button>
        </p>
    );
};

SizeButton.propTypes = {
    sizeIndex: PropTypes.number.isRequired,
};

export default SizeButton;
