import CardListItem from '../cardListItem';

import './cardList.scss';

const CardList = ({ data }) => {

    const elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return <CardListItem key={id} id={id} {...itemProps}  />
    })

    return <div className="d-flex flex-wrap justify-content-center wrapper">{elements}</div>
};

export default CardList;