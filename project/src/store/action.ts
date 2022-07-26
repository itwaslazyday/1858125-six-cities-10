import {createAction} from '@reduxjs/toolkit';

const changeCity = createAction('city/change', (name) => ({payload: name}));
const getOffers = createAction('city/offers');

export {changeCity, getOffers};
