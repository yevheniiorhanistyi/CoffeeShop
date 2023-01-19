
import './cardListItem.scss';

const CardListItem = ({id, src, name, country, price, onOpenDescription}) => {
        return (
            <div className="coffee-card" onClick={() => onOpenDescription(id)}>
                <img className="coffee-card__img" src={src} alt="Coffee beans" />
                <div className="coffee-card__body">
                    <h5 className="coffee-card__title">{name}</h5>
                    <p className="coffee-card__country">{country}</p>
                    <p className="coffee-card__price">{price}</p>
                </div>
            </div>
        );
}

export default CardListItem;