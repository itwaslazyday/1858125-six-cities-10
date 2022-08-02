import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, setAuthorization, setError, setDataLoadedStatus, setAuthInfo, setOffer, setComments, setNearbyPlaces} from './action';
import {AuthorizationStatus} from '../const';
import {Place, Review} from '../types/types';
import {AxiosResponse} from 'axios';

type InitialState = {
  city: string;
  offers: Place[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isDataLoaded: boolean;
  userInfo: AxiosResponse['data'] | null;
  offer: Place | null;
  comments: Review[] | null;
  nearby: Place[] | null;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false,
  userInfo: null,
  offer: null,
  comments: [],
  nearby: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setNearbyPlaces, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setAuthInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});
