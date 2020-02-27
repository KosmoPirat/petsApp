import { h } from 'preact';

import PetNameSearchInput from '../PetNameSearchInput/PetNameSearchInput';
import PetCheckboxSearch from '../SizeButtonsSearch/SizeButtonsSearch';

import style from './PetsFilterLayout.css';

const PetsFilterLayout = () => {
    return (
        <section className={style['pets-filter-layout']}>
            <h5 className="title is-5">Поиск</h5>
            <PetNameSearchInput />
            <PetCheckboxSearch />
        </section>
    );
};

export default PetsFilterLayout;
