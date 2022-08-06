import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {AxiosResponse} from 'axios';
import { Place, Review } from './types';
import { SerializedError } from '@reduxjs/toolkit';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: AxiosResponse['data'] | null;
};

type OffersProcess = {
  city: string;
  offers: Place[];
  isDataLoaded: boolean;
};

type OfferProcess = {
  room: Place | null;
  comments: Review[] | null;
  nearby: Place[] | null;
};

type ErrorsProcess = {
  authError: string | null | SerializedError,
  offerDataError: boolean,
  offerCommentsError: boolean,
  offerNearbyError: boolean
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {UserProcess, OffersProcess, OfferProcess, ErrorsProcess, State, AppDispatch};
