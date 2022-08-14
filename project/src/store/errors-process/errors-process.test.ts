import {errorsProcess} from './errors-process';
import {ErrorsProcess} from '../../types/state';
import {checkAuthAction, fetchCommentsAction, fetchOfferAction, fetchNearbyPlacesAction, loginAction} from '../api-actions';

describe('Reducer: errors', () => {
  let state: ErrorsProcess;

  beforeEach(() => {
    state = {
      authError: false,
      offerDataError: false,
      offerCommentsError: false,
      offerNearbyError: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(errorsProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchOfferAction test', () => {
    it('should cnahge offerDataError to true', () => {
      expect(errorsProcess.reducer(state, {type: fetchOfferAction.rejected.type}))
        .toEqual({...state, offerDataError: true});
    });
  });

  describe('fetchCommentsAction test', () => {
    it('should cnahge offerCommentsError to true', () => {
      expect(errorsProcess.reducer(state, {type: fetchCommentsAction.rejected.type}))
        .toEqual({...state, offerCommentsError: true});
    });
  });

  describe('fetchNearbyPlacesAction test', () => {
    it('should cnahge offerNearbyError to true', () => {
      expect(errorsProcess.reducer(state, {type: fetchNearbyPlacesAction.rejected.type}))
        .toEqual({...state, offerNearbyError: true});
    });
  });


  describe('checkAuthAction test', () => {
    it('should cnahge authError to true', () => {
      expect(errorsProcess.reducer(state, { type: checkAuthAction.rejected.type}))
        .toEqual({...state, authError: true});
    });
  });

  describe('loginAction test', () => {
    it('should cnahge authError to false', () => {
      expect(errorsProcess.reducer(state, {type: loginAction.fulfilled.type}))
        .toEqual({...state, authError: false});
    });
  });
});
