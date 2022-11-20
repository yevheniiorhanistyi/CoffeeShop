import { Component } from "react";

import './card.scss';

class Card extends Component {

    render() {
        const { src, name, country, price, recommended } = this.props.data;

        return (
            <div className="coffee-card" >
                <img className="coffee-card__img" src={src} alt="Coffee beans" />
                <div className="coffee-card__body">
                    <h5 className="coffee-card__title">{name}</h5>
                    {!recommended && <p className="coffee-card__country">{country}</p>}
                    <p className="coffee-card__price">{price}</p>
                </div>
            </div>
        );
    }


}

export default Card;