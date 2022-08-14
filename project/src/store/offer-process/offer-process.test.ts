import {offerProcess} from './offer-process';
import {OfferProcess} from '../../types/state';
import {fetchOfferAction, fetchCommentsAction, fetchNearbyPlacesAction, fetchNewCommentAction} from '../api-actions';
import {makeFakeOfferProcess} from '../../utiles/mocks';

const offer = makeFakeOfferProcess();

describe('Reducer: offers', () => {
  let state: OfferProcess;

  beforeEach(() => {
    state = {
      room: null,
      comments: [],
      nearby: []
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offerProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchOfferAction test', () => {
    it('should add offers to initial state, change downloading status to true', () => {
      expect(offerProcess.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: offer.room}))
        .toEqual({...state, room: offer.room});
    });
  });

  describe('fetchCommentsAction test', () => {
    it('should add favorites offers to initial state', () => {
      expect(offerProcess.reducer(state, {type: fetchCommentsAction.fulfilled.type, payload: offer.comments}))
        .toEqual({...state, comments: offer.comments});
    });
  });


  describe('fetchNearbyPlacesAction test', () => {
    it('should add favorites offers to initial state', () => {
      expect(offerProcess.reducer(state, {type: fetchNearbyPlacesAction.fulfilled.type, payload: offer.nearby}))
        .toEqual({...state, nearby: offer.nearby});
    });
  });


  describe('fetchNewCommentAction test', () => {
    it('should add favorites offers to initial state', () => {
      expect(offerProcess.reducer(state, {type: fetchNewCommentAction.fulfilled.type, payload: offer.comments}))
        .toEqual({...state, comments: offer.comments});
    });
  });
});
