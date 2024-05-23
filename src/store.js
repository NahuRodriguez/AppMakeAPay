import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCurrency: null,
  amount: 0,
  conceptOfPay: '',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setConceptOfPay: (state, action) => {
      state.conceptOfPay = action.payload;
    },
  },
});

export const { setSelectedCurrency, setAmount, setConceptOfPay } = paymentSlice.actions;

const store = configureStore({
  reducer: {
    payment: paymentSlice.reducer,
  },
});

export default store;
