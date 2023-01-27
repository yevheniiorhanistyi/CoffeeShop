import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './types';

const initialState: FilterSliceState = {
    searchValue: '',
    currentFilter: ''
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload.toLowerCase();
        },
        setCurrentFilter(state, action: PayloadAction<string>) {
            action.payload === state.currentFilter ? state.currentFilter = '' : state.currentFilter = action.payload;
        },
    },
});

export const { setSearchValue, setCurrentFilter } = filterSlice.actions;

export default filterSlice.reducer;