import { h } from 'preact';

import PetNameSearchInput from '../PetNameSearchInput/PetNameSearchInput';
import SizeButtonsSearch from '../SizeButtonsSearch/SizeButtonsSearch';
import SexButtonsSearch from '../SexButtonsSearch/SexButtonsSearch';

import style from './PetsFilterLayout.css';

const PetsFilterLayout = () => {
    return (
        <section className={style['pets-filter-layout']}>
            <PetNameSearchInput />
            <SizeButtonsSearch />
            <SexButtonsSearch />
        </section>
    );
};

export default PetsFilterLayout;
