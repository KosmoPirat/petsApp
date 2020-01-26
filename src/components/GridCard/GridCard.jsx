import { h } from 'preact';
import { Link } from 'preact-router/match';
import PropTypes from 'prop-types';

const GridCard = ({ slug, name, mainPhoto }) => (
    <Link href={`/pet-profile/${slug}`}>
        <div className="card" key={name}>
            <div className="card-image">
                <figure className="image is-3by2">
                    <img src={mainPhoto.fields.file.url} alt="Placeholder" />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{name}</p>

                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                    mauris.
                </div>
            </div>
        </div>
    </Link>
);

GridCard.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mainPhoto: PropTypes.shape({
        fields: PropTypes.shape({
            file: PropTypes.shape({
                url: PropTypes.string,
            }),
        }),
    }),
};

GridCard.defaultProps = {
    mainPhoto: {
        fields: {
            file: {
                url: 'https://bulma.io/images/placeholders/1280x960.png',
            },
        },
    },
};

export default GridCard;
