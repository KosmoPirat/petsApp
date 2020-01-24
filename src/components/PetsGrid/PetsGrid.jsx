import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import contentfulClient from '../../helpers/contentful/contentfulClient';

import style from './PetsGrid.css';

const PetsGrid = () => {
    const [petItems, changePetItems] = useState([]);
    const [arePetsLoaded, changeArePetsLoaded] = useState(false);

    useEffect(() => {
        contentfulClient.getAllPets().then(pets => {
            changePetItems(pets.items);
            changeArePetsLoaded(true);
        });
    }, []);

    if (!arePetsLoaded) {
        return <div>Идет загрузка данных</div>;
    }

    return (
        <section className={style['pets-grid']}>
            {petItems.map(pet => (
                <div className="card" key={pet.fields.name}>
                    <div className="card-image">
                        <figure className="image is-3by2">
                            {pet.fields.mainPhoto === undefined ? (
                                <img
                                    src="https://bulma.io/images/placeholders/1280x960.png"
                                    alt="Placeholder"
                                />
                            ) : (
                                <img src={pet.fields.mainPhoto.fields.file.url} alt="Placeholder" />
                            )}
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">{pet.fields.name}</p>

                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                            iaculis mauris.
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default PetsGrid;
