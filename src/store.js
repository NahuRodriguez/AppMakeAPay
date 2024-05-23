import { configureStore, createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    selectedCurrency: null,
  },
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setSelectedCurrency } = currencySlice.actions;

const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
  },
});

export default store;
