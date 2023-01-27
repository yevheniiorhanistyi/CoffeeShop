export type Article = {
    id: number;
    src: string;
    name: string;
    country: string;
    price: string;
    recommended: boolean;
}

export interface ArticleSliceState {
    articles: Article[];
    selectedArticles: Article[];
};