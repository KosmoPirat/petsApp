import { h } from 'preact';

import { useContext, useEffect } from 'preact/hooks';
import SearchParamContext from '../PetsLayout/SearchParamContext';
import SizeButton from '../SizeButton/SizeButton';

import Utils from '../../helpers/utils';

const SizeButtonsSearch = () => {
    const searchParam = useContext(SearchParamContext);
    useEffect(() => {
        const request = Utils.getRequest(searchParam.searchValues.size);
        searchParam.searchMethods.searchBySize(request);
    }, [searchParam.searchValues.size]);

    return (
        <div className="field has-addons">
            {searchParam.searchValues.size.map(searchButton => (
                <SizeButton name={searchButton.name} isChecked={searchButton.isChecked} />
            ))}
        </div>
    );
};

export default SizeButtonsSearch;
