import {createAction} from '@reduxjs/toolkit';
import {Place, Review} from '../types/types';
import {AppRoute, AuthorizationStatus} from '../const';
import {AxiosResponse} from 'axios';

const changeCity = createAction('city/changeCity', (name: string) => ({payload: name}));
const setOffers = createAction('data/setOffers', (offers: Place[]) => ({payload: offers}));
const setOffer = createAction('data/setOffer', (offer: Place | null) => ({payload: offer}));
const setComments = createAction('data/setComments', (comments: Review[] | null) => ({payload: comments}));
const setNearbyPlaces = createAction('data/setNearbyPlaces', (nearby: Place[] | null) => ({payload: nearby}));
const setAuthorization = createAction('user/setAuthorization', (authorization: AuthorizationStatus) => ({payload: authorization}));
const setDataLoadedStatus = createAction('data/setDataLoadedStatus', (loadingStatus: boolean) => ({payload: loadingStatus}));
const setAuthInfo = createAction('login/setAuthInfo', (info: AxiosResponse['data'] | null) => ({payload: info}));
const redirectToRoute = createAction('app/redirectToRoute', (route: AppRoute) => ({payload: route}));

const setAuthError = createAction('app/setAuthError', (error: string | null) => ({payload: error}));
const setOfferDataError = createAction('app/setOfferDataError', (error: boolean) => ({payload: error}));
const setOfferCommentsError = createAction('app/setOfferCommentsError', (error: boolean) => ({payload: error}));
const setOfferNearbyError = createAction('app/setOfferNearbyError', (error: boolean) => ({payload: error}));

export {changeCity, setOffers, setAuthorization, setAuthError, setOfferDataError, setOfferCommentsError, setOfferNearbyError, setDataLoadedStatus,
  setAuthInfo, setOffer, setComments, setNearbyPlaces, redirectToRoute};
