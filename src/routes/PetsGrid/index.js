import { h, Component } from 'preact';
import { contentfulClient } from '../../helpers/contentful/contentfulClient'

import style from './style';

export default class PetsGrid extends Component {
    state = {
    	petItems: [],
    	arePetsLoaded: false
    };

    componentDidMount() {
        contentfulClient.getAllPets()
            .then((pets) => {
                this.setState({
                    petItems: pets.items,
                    arePetsLoaded: true
                });
        })
    }

    render({}, { arePetsLoaded, petItems }) {
    	if (!arePetsLoaded) {
    		return <div>Идет загрузка данных</div>;
    	}

    	return (
    		<div className={style['pets-grid']}>
    			{
    				petItems.map((pet) => (
    					<div className="card" key={pet.fields.name}>
    						<div className="card-image">
    							<figure className="image is-3by2">
    								{
    									pet.fields.mainPhoto === undefined
    										? <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
    										: <img src={pet.fields.mainPhoto.fields.file.url} alt="Placeholder" />
    								}
    							</figure>
    						</div>
    						<div className="card-content">
    							<p className="title is-4">{pet.fields.name}</p>
    
    							<div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris.
    							</div>
    						</div>
    					</div>
    				))
    			}
    		</div>
    	);
    }
}