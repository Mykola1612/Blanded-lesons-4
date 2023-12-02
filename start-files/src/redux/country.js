import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountryData = createAsyncThunk(
  'country/fetchCountryData',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`,
      );

      console.log('data: ', data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {
  countryData: null,
  isLoading: false,
  error: null,
};

export const counrtySlice = createSlice({
  name: 'counrty',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchCountryData.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCountryData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.countryData = payload;
      })
      .addCase(fetchCountryData.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const countryReducer = counrtySlice.reducer;
