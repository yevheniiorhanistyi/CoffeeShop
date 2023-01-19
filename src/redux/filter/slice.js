import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchValue: '',
    currentFilter: ''
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload.toLowerCase();
        },
        setCurrentFilter(state, action) {
            action.payload === state.currentFilter ? state.currentFilter = '' : state.currentFilter = action.payload;
        },
    },
});

export const { setSearchValue, setCurrentFilter } = filterSlice.actions;

export default filterSlice.reducer;