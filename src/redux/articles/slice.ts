import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleSliceState } from './types';
import { data } from '../../resources/data';


const initialState: ArticleSliceState = {
    articles: data,
    selectedArticles: data,
};

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setSelectedArticles(state, action: PayloadAction<Article[]>) {
            state.selectedArticles = action.payload;
        },
    },
});

export const { setSelectedArticles } = articlesSlice.actions;

export default articlesSlice.reducer;