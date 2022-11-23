import CardListItem from '../card-list-item/card-list-item';

import './card-list.scss';

const CardList = ({ data, onOpenDescription}) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        if (onOpenDescription) {
            return <CardListItem
                key={id} {...itemProps}
                onOpenDescription={() => onOpenDescription(id)} />
        } else {
            return <CardListItem
                key={id} {...itemProps} />
        }

    })

    return <div className="d-flex flex-wrap justify-content-center wrapper">{elements}</div>
};

export default CardList;