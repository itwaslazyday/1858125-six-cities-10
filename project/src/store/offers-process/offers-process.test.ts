import {offersProcess} from './offers-process';
import {OffersProcess} from '../../types/state';
import {fetchOffersAction, fetchFavoritesAction} from '../api-actions';
import { changeCity } from './offers-process';
import { makeFakeOffersProcess, makeFakeCityName } from '../../utiles/mocks';

const offers = makeFakeOffersProcess();
const city = makeFakeCityName();

describe('Reducer: offers', () => {
  let state: OffersProcess;

  beforeEach(() => {
    state = {
      city: 'Paris',
      offers: [],
      isDataLoaded: false,
      favoriteOffers: []
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchOffersAction test', () => {
    it('should add offers to initial state, change downloading status to true', () => {
      expect(offersProcess.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: offers}))
        .toEqual({...state, offers, isDataLoaded: true});
    });
  });

  describe('fetchFavoritesAction test', () => {
    it('should add favorites offers to initial state', () => {
      expect(offersProcess.reducer(state, {type: fetchFavoritesAction.fulfilled.type, payload: offers}))
        .toEqual({...state, favoriteOffers: offers});
    });
  });

  describe('changeCity test', () => {
    it('should change the name of current location', () => {
      expect(offersProcess.reducer(state, {type: changeCity.type, payload: city}))
        .toEqual({...state, city});
    });
  });
});
