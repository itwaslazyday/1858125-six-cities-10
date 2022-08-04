import {createReducer} from '@reduxjs/toolkit';
import {setAuthInfo, setAuthorization} from '../action';
import {AuthorizationStatus} from '../../const';
import {AxiosResponse} from 'axios';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  userInfo: AxiosResponse['data'] | null;
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});
