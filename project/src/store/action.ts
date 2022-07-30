import {createAction} from '@reduxjs/toolkit';
import {Place} from '../types/types';
import {AuthorizationStatus} from '../const';
import {AxiosResponse} from 'axios';

const changeCity = createAction('city/changeCity', (name: string) => ({payload: name}));
const getOffers = createAction('data/getOffers', (offers: Place[]) => ({payload: offers}));
const checkAuthorization = createAction('user/requireAuthorization', (authorization: AuthorizationStatus) => ({payload: authorization}));
const setError = createAction('app/setError', (error: string | null) => ({payload: error}));
const setDataLoadedStatus = createAction('data/setDataLoadedStatus', (loadingStatus: boolean) => ({payload: loadingStatus}));
const setAuthInfo = createAction('login/setAuthInfo', (info: AxiosResponse['data'] | null) => ({payload: info}));

export {changeCity, getOffers, checkAuthorization, setError, setDataLoadedStatus, setAuthInfo};
