import { h } from 'preact';

import PetsGrid from '../PetsGrid/PetsGrid';
import PetsFilter from '../PetsFilter/PetsFilter';

import style from './PetsLayout.css';

const PetsLayout = () => {
    return (
        <div className={style['pets-layout']}>
            <PetsFilter />
            <PetsGrid />
        </div>
    );
};

export default PetsLayout;
