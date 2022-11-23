import { Component } from "react";

import './card-list-item.scss';

class CardListItem extends Component {

    render() {
        const { src, name, country, price, onOpenDescription } = this.props;

        return (
            <div className="coffee-card" onClick={onOpenDescription}>
                <img className="coffee-card__img" src={src} alt="Coffee beans" />
                <div className="coffee-card__body">
                    <h5 className="coffee-card__title">{name}</h5>
                    <p className="coffee-card__country">{country}</p>
                    <p className="coffee-card__price">{price}</p>
                </div>
            </div>
        );
    }


}

export default CardListItem;