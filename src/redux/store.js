import { configureStore } from '@reduxjs/toolkit'

import articles from './articles/slice';
import filter from './filter/slice';

export const store = configureStore({
  reducer: {
    articles,
    filter,
  },
});