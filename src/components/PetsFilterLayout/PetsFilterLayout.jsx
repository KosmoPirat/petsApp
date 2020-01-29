import { h } from 'preact';

import PetNameSearchInput from '../PetNameSearchInput/PetNameSearchInput';

import style from './PetsFilterLayout.css';

const PetsFilterLayout = () => {
    return (
        <section className={style['pets-filter']}>
            <PetNameSearchInput />
        </section>
    );
};

export default PetsFilterLayout;
