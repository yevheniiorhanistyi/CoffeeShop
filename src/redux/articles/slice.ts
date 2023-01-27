import { createSlice } from '@reduxjs/toolkit';
import { ArticleSliceState } from './types';
import { data } from '../../resources/data';


const initialState: ArticleSliceState = {
    articles: data,
    selectedArticles: data,
};

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setSelectedArticles(state, action) {
            state.selectedArticles = action.payload;
        },
    },
});

export const { setSelectedArticles } = articlesSlice.actions;

export default articlesSlice.reducer;