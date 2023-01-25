import { Link } from 'react-router-dom';

import './CardListItem.scss';

export const CardListItem = ({ id, src, name, country, price }) => {
    return (
        <Link to={`/coffee/${id}`} rel="noopener noreferrer">
            <div className="coffee-card" >
                <img className="coffee-card__img" src={src} alt="Coffee beans" />
                <div className="coffee-card__body">
                    <h5 className="coffee-card__title">{name}</h5>
                    <p className="coffee-card__country">{country}</p>
                    <p className="coffee-card__price">{price}$</p>
                </div>
            </div>
        </Link>
    );
};