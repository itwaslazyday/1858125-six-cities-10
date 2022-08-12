import {userProcess} from './user-process';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import { makeFakeUserInfo } from '../../utiles/mocks';

const userInfo = makeFakeUserInfo();

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {authorizationStatus: AuthorizationStatus.Unknown, userInfo: null};
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, userInfo: null});
  });

  describe('checkAuthAction test', () => {
    it('should update initial state (authorizationStatus to "AUTH", userInfo to user data) if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.fulfilled.type, payload: userInfo}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, userInfo});
    });
    it('should return initial state if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userInfo: null});
    });
  });

  describe('loginAction test', () => {
    it('should update initial state (authorizationStatus to "AUTH", userInfo to user data) if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: loginAction.fulfilled.type, payload: userInfo}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, userInfo});
    });
  });

  describe('logoutAction test', () => {
    it('should return initial state if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: logoutAction.fulfilled.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userInfo: null});
    });
  });
});
