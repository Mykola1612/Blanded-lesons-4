import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountriesByRegion = createAsyncThunk(
  'countries/CountriesByRegion',
  async (region, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`,
      );

      console.log('data: ', data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {
  selectedRegion: null,
  countryArray: [],
  isLoading: false,
  error: null,
};

const countrySearchSlice = createSlice({
  name: 'countrySearch',
  initialState,
  reducers: {
    setselectedRegion(state, { payload }) {
      state.selectedRegion = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCountriesByRegion.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCountriesByRegion.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.countryArray = payload;
      })
      .addCase(fetchCountriesByRegion.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const { setselectedRegion } = countrySearchSlice.actions;

export const countrySearchReducer = countrySearchSlice.reducer;
