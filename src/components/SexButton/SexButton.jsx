import { h } from 'preact';
import { useContext } from 'preact/hooks';
import PropTypes from 'prop-types';
import SearchParamContext from '../PetsLayout/SearchParamContext';

import style from './SexButton.css';

const SexButton = ({ sexIndex }) => {
    const searchParam = useContext(SearchParamContext);
    const sex = searchParam.searchValues.sexSearchParam[sexIndex];
    const changeSize = () => {
        const newSexes = searchParam.searchValues.sexSearchParam.map(item =>
            item.name === sex.name
                ? { name: item.name, isChecked: !item.isChecked }
                : { name: item.name, isChecked: item.isChecked }
        );
        searchParam.searchMethods.searchBySex(newSexes);
    };
    return (
        <p className="control">
            <button
                className={`button ${sex.isChecked ? 'is-success' : ''}`}
                type="button"
                onClick={changeSize}
            >
                <span className={style['sex-button__text']}>{sex.name}</span>
            </button>
        </p>
    );
};

SexButton.propTypes = {
    sexIndex: PropTypes.number.isRequired,
};

export default SexButton;
