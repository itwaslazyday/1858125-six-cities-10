import {combineReducers} from '@reduxjs/toolkit';
import {errorReducer} from './errorReducer';
import {offerReducer} from './offerReducer';
import {offersReducer} from './offersReducer';
import {userReducer} from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  offers: offersReducer,
  offer: offerReducer,
  errors: errorReducer
});

export type RootState = ReturnType<typeof rootReducer>;
