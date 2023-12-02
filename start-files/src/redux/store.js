import { configureStore } from '@reduxjs/toolkit';
import { countrySearchReducer } from './countrySearchSlice';
import { countryReducer } from './country';

export const store = configureStore({
  reducer: {
    countrySearch: countrySearchReducer,
    country: countryReducer,
  },
});
