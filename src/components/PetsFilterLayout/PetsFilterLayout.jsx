import { h } from 'preact';

import PetNameSearchInput from '../PetNameSearchInput/PetNameSearchInput';
import PetCheckboxSearch from '../SizeCheckboxesSearch/SizeCheckboxesSearch';

import style from './PetsFilterLayout.css';

const PetsFilterLayout = () => {
    return (
        <section className={style['pets-filter-layout']}>
            <PetNameSearchInput />
            <PetCheckboxSearch />
        </section>
    );
};

export default PetsFilterLayout;
