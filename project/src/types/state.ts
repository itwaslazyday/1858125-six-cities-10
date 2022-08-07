import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {AxiosResponse} from 'axios';
import { Place, Review } from './types';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: AxiosResponse['data'] | null;
};

type OffersProcess = {
  city: string;
  offers: Place[];
  isDataLoaded: boolean;
  favoriteOffers: Place[];
};

type OfferProcess = {
  room: Place | null;
  comments: Review[] | null;
  nearby: Place[] | null;
};

type ErrorsProcess = {
  authError: boolean,
  offerDataError: boolean,
  offerCommentsError: boolean,
  offerNearbyError: boolean
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {UserProcess, OffersProcess, OfferProcess, ErrorsProcess, State, AppDispatch};
