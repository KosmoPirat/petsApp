import { h } from 'preact';

import { useState, useContext, useEffect, useMemo } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';
import SizeCheckbox from '../SizeCheckbox/SizeCheckbox';

const SizeCheckboxesSearch = () => {
    const [checkboxSmall, changeSmall] = useState({ isChecked: false, value: '' });
    const [checkboxMedium, changeMedium] = useState({ isChecked: false, value: '' });
    const [checkboxBig, changeBig] = useState({ isChecked: false, value: '' });
    const searchParam = useContext(SearchParamContext);
    useEffect(() => {
        let paramRequest = [checkboxSmall.value, checkboxMedium.value, checkboxBig.value].join(',');
        if (paramRequest === ',,') {
            paramRequest = [
                searchParam.searchValues.checkboxSmall,
                searchParam.searchValues.checkboxMedium,
                searchParam.searchValues.checkboxBig,
            ].join(',');
        }
        searchParam.searchMethods.searchBySize(paramRequest);
    }, [checkboxSmall, checkboxMedium, checkboxBig]);

    const checkboxes = useMemo(
        () => [
            {
                name: 'small',
                value: searchParam.searchValues.checkboxSmall,
                isChecked: checkboxSmall.isChecked,
                onChangeHandler: changeSmall,
            },
            {
                name: 'medium',
                value: searchParam.searchValues.checkboxMedium,
                isChecked: checkboxMedium.isChecked,
                onChangeHandler: changeMedium,
            },
            {
                name: 'big',
                value: searchParam.searchValues.checkboxBig,
                isChecked: checkboxBig.isChecked,
                onChangeHandler: changeBig,
            },
        ],
        [checkboxSmall, checkboxMedium, checkboxBig]
    );

    return (
        <div>
            {checkboxes.map(checkbox => (
                <SizeCheckbox
                    name={checkbox.name}
                    value={checkbox.value}
                    isChecked={checkbox.isChecked}
                    onChangeHandler={checkbox.onChangeHandler}
                />
            ))}
        </div>
    );
};

export default SizeCheckboxesSearch;
