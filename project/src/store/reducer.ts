import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers, checkAuthorization, setError, setDataLoadedStatus} from './action';
import {AuthorizationStatus} from '../const';
import {Place} from '../types/types';

type InitialState = {
  city: string;
  offers: Place[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isDataLoaded: boolean;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: true
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(checkAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
