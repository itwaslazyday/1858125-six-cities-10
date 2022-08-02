import {createAction} from '@reduxjs/toolkit';
import {Place, Review} from '../types/types';
import {AuthorizationStatus} from '../const';
import {AxiosResponse} from 'axios';

const changeCity = createAction('city/changeCity', (name: string) => ({payload: name}));
const setOffers = createAction('data/setOffers', (offers: Place[]) => ({payload: offers}));
const setOffer = createAction('data/setOffer', (offer: Place | null) => ({payload: offer}));
const setComments = createAction('data/setComments', (comments: Review[] | null) => ({payload: comments}));
const setNearbyPlaces = createAction('data/setNearbyPlaces', (nearby: Place[] | null) => ({payload: nearby}));
const setAuthorization = createAction('user/setAuthorization', (authorization: AuthorizationStatus) => ({payload: authorization}));
const setError = createAction('app/setError', (error: string | null) => ({payload: error}));
const setDataLoadedStatus = createAction('data/setDataLoadedStatus', (loadingStatus: boolean) => ({payload: loadingStatus}));
const setAuthInfo = createAction('login/setAuthInfo', (info: AxiosResponse['data'] | null) => ({payload: info}));

export {changeCity, setOffers, setAuthorization, setError, setDataLoadedStatus, setAuthInfo, setOffer, setComments, setNearbyPlaces};
