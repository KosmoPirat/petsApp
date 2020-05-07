import { h } from 'preact';
import GridCard from '../GridCard/GridCard';
import PetsPagination from '../PetsPagination/PetsPagination';

import style from './PetsGrid.css';

const PetsGrid = pets => {
    if (!pets.petsList.length) {
        return (
            <div>
                {'По запросу '}
                <strong>
                    <i>{pets.searchRequest}</i>
                </strong>
                {' ничего не найдено!'}
            </div>
        );
    }

    const listOfPets = pets.petsList.map(pet => (
        <GridCard slug={pet.fields.slug} name={pet.fields.name} mainPhoto={pet.fields.mainPhoto} />
    ));

    return (
        <div className={style['pets-grid__wrapper']}>
            <section className={style['pets-grid']}>{listOfPets}</section>
            <PetsPagination />
        </div>
    );
};

export default PetsGrid;
