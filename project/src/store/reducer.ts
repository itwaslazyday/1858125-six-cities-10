import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers} from './action';
import {places} from '../fish/fish-offers';

const initialState = {
  city: 'Paris',
  offers: places,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      // state.offers = action.payload;
    });
});
