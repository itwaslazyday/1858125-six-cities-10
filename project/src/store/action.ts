import {createAction} from '@reduxjs/toolkit';
import {Place} from '../types/types';
import {AuthorizationStatus} from '../const';

const changeCity = createAction('city/change', (name: string) => ({payload: name}));
const getOffers = createAction('data/offers', (offers: Place[]) => ({payload: offers}));
const checkAuthorization = createAction('user/requireAuthorization', (authorization: AuthorizationStatus) => ({payload: authorization}));
const setError = createAction('app/setError', (error: string | null) => ({payload: error}));
const setDataLoadedStatus = createAction('data/setDataLoadedStatus', (loadingStatus: boolean) => ({payload: loadingStatus}));

export {changeCity, getOffers, checkAuthorization, setError, setDataLoadedStatus};
