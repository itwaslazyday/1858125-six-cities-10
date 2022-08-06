import {combineReducers} from '@reduxjs/toolkit';
import { errorsProcess } from './errors-process/errors-process';
import { offerProcess } from './offer-process/offer-process';
import { offersProcess } from './offers-process/offers-process';
import { userProcess } from './user-process/user-process';
import {NameSpace} from '../const';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Errors]: errorsProcess.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
