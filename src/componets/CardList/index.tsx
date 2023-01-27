import { CardListItem } from '..';

import './CardList.scss';

type Article = {
    id: number;
    src: string;
    name: string;
    country: string;
    price: string;
    recommended: boolean;
}

type CardListProps = {
    data: Article[];
}

export const CardList: React.FC<CardListProps> = ({ data }) => {

    const elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return <CardListItem key={id} id={id} {...itemProps} />
    })

    return <div className="d-flex flex-wrap justify-content-center wrapper">{elements}</div>
};