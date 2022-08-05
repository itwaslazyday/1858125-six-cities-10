import {createReducer} from '@reduxjs/toolkit';
import {setAuthError, setOfferDataError, setOfferCommentsError, setOfferNearbyError} from '../action';

type InitialState = {
  authError: string | null,
  offerDataError: boolean,
  offerCoomentsError: boolean,
  offerNearbyError: boolean
};

const initialState: InitialState = {
  authError: null,
  offerDataError: false,
  offerCoomentsError: false,
  offerNearbyError: false
};

export const errorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthError, (state, action) => {
      state.authError = action.payload;
    })
    .addCase(setOfferDataError, (state, action) => {
      state.offerDataError = action.payload;
    })
    .addCase(setOfferCommentsError, (state, action) => {
      state.offerCoomentsError = action.payload;
    })
    .addCase(setOfferNearbyError, (state, action) => {
      state.offerNearbyError = action.payload;
    });
});
