import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, setDataLoadedStatus} from '../action';
import {Place} from '../../types/types';

type InitialState = {
  city: string;
  offers: Place[];
  isDataLoaded: boolean;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  isDataLoaded: false
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
