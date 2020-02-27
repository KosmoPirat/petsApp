import { h } from 'preact';
import { useContext } from 'preact/hooks';
import PropTypes from 'prop-types';
import SearchParamContext from '../PetsLayout/SearchParamContext';

import style from './SizeButton.css';

const SizeButton = ({ sizeIndex }) => {
    const searchParam = useContext(SearchParamContext);
    const changeSize = () => {
        const newSize = searchParam.searchValues.size.map(item =>
            item.name === searchParam.searchValues.size[sizeIndex].name
                ? { name: item.name, isChecked: !item.isChecked }
                : { name: item.name, isChecked: item.isChecked }
        );
        searchParam.changeRequestParams.changeSize(newSize);
    };
    return (
        <p className="control">
            <button
                className={`button ${
                    searchParam.searchValues.size[sizeIndex].isChecked ? 'is-success' : ''
                }`}
                type="button"
                onClick={changeSize}
            >
                <span className={style['size-buttom__text']}>
                    {searchParam.searchValues.size[sizeIndex].name}
                </span>
            </button>
        </p>
    );
};

SizeButton.propTypes = {
    sizeIndex: PropTypes.number.isRequired,
};

export default SizeButton;
