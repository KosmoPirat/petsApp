import { h } from 'preact';
import GridCard from '../GridCard/GridCard';

import style from './PetsGrid.css';

const PetsGrid = pets => {
    if (!pets.petsList.length) {
        return (
            <div>
                По запросу{' '}
                <span className={style['search-request_error']}>{pets.searchRequest}</span> ничего
                не найдено!
            </div>
        );
    }

    const listOfPets = pets.petsList.map(pet => (
        <GridCard slug={pet.fields.slug} name={pet.fields.name} mainPhoto={pet.fields.mainPhoto} />
    ));

    return <section className={style['pets-grid']}>{listOfPets}</section>;
};

export default PetsGrid;
