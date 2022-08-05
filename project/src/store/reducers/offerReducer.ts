import {createReducer} from '@reduxjs/toolkit';
import {setOffer, setComments, setNearbyPlaces} from '../action';
import {Place, Review} from '../../types/types';

type InitialState = {
  room: Place | null;
  comments: Review[] | null;
  nearby: Place[] | null;
};

const initialState: InitialState = {
  room: null,
  comments: [],
  nearby: []
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, (state, action) => {
      state.room = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setNearbyPlaces, (state, action) => {
      state.nearby = action.payload;
    });
});
