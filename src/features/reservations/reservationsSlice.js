/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import expertClassApi from '../../app/expertClassApi';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

export const fetchReservations = createAsyncThunk(
  'reservationsSlice/reservations', async (thunkAPI) => {
    try {
      const response = await expertClassApi.get('reservations');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Error fetching reservations';
      });
  },
});

export const userReservations = (state) => state.reservations.reservations;

export default reservationsSlice.reducer;
