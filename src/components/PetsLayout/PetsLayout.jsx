import { h } from 'preact';
import { useEffect } from 'preact/hooks';

import PetsGrid from '../PetsGrid/PetsGrid';
import PetsFilter from '../PetsFilter/PetsFilter';
import Document from '../../helpers/documentHelper';

import style from './PetsLayout.css';

const PetsLayout = () => {
    useEffect(() => {
        Document.setTitle('Наши питомцы');
    }, []);

    return (
        <div className={style['pets-layout']}>
            <PetsFilter />
            <PetsGrid />
        </div>
    );
};

export default PetsLayout;
