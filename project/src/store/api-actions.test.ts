import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, fetchAddToFavoritesAction, fetchCommentsAction, fetchFavoritesAction, fetchNearbyPlacesAction, fetchNewCommentAction, fetchOfferAction, fetchOffersAction, loginAction, logoutAction} from './api-actions';
import {APIRoute} from '../const';
import {State} from '../types/state';
import { AuthData } from '../types/auth-data';
import { makeFakeComment, makeFakeOfferProcess, makeFakeOffersProcess } from '../utiles/mocks';
import { Place, Review } from '../types/types';
import faker from 'faker';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    length: 0,
    clear: jest.fn(),
    key: jest.fn()
  };

  global.localStorage = localStorageMock;

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login)

      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);

    expect(localStorageMock.setItem).toBeCalledTimes(1);
    expect(localStorageMock.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(localStorageMock.removeItem).toBeCalledTimes(1);
    expect(localStorageMock.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch fetchOffersAction when GET /offers', async () => {
    const mockOffers = makeFakeOffersProcess();

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchOfferAction when GET /offer', async () => {
    const mockOffer = makeFakeOfferProcess().room as Place;
    const id = mockOffer.id;

    mockAPI
      .onGet(`${APIRoute.Offers}/${id}`)
      .reply(200, mockOffer);

    const store = mockStore();

    await store.dispatch(fetchOfferAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchCommentsAction when GET /comments', async () => {
    const mockOffer = makeFakeOfferProcess().room as Place;
    const id = mockOffer.id;
    const mockComments = makeFakeOfferProcess().comments as Review[];

    mockAPI
      .onGet(`${APIRoute.Comments}/${id}`)
      .reply(200, mockComments);

    const store = mockStore();

    await store.dispatch(fetchCommentsAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCommentsAction.pending.type,
      fetchCommentsAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchNearbyPlacesAction when GET /nearby', async () => {
    const mockOffer = makeFakeOfferProcess().room as Place;
    const id = mockOffer.id;
    const mockNearbyPlaces = makeFakeOfferProcess().nearby as Place[];

    mockAPI
      .onGet(`${APIRoute.Offers}/${id}/nearby`)
      .reply(200, mockNearbyPlaces);

    const store = mockStore();

    await store.dispatch(fetchNearbyPlacesAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchNearbyPlacesAction.pending.type,
      fetchNearbyPlacesAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchFavoritesAction when GET /favorites', async () => {
    const mockOffers = makeFakeOffersProcess();

    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchFavoritesAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoritesAction.pending.type,
      fetchFavoritesAction.fulfilled.type
    ]);
  });


  it('should dispatch fetchNewCommentAction when POST /comments/id', async () => {
    const mockNewComment = makeFakeComment() as Review;
    const mockComments = makeFakeOfferProcess().comments as Review[];
    const mockOffer = makeFakeOfferProcess().room as Place;
    const id = mockOffer.id;
    const {rating, comment} = mockNewComment;

    mockAPI
      .onPost(`${APIRoute.Comments}/${id}`)
      .reply(200, mockComments);

    const store = mockStore();

    await store.dispatch(fetchNewCommentAction({id, rating, review: comment}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchNewCommentAction.pending.type,
      fetchNewCommentAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchAddToFavoritesAction when POST /favorite/id', async () => {
    const mockOffer = makeFakeOfferProcess().room as Place;
    const id = mockOffer.id;
    const currentId = id;
    const status = faker.datatype.number({min: 0, max: 1});

    mockAPI
      .onPost(`${APIRoute.Favorite}/${id}/${status}`)
      .reply(200, mockOffer);

    const store = mockStore();

    await store.dispatch(fetchAddToFavoritesAction({id, status, currentId}));

    const actions = store.getActions().map(({type}) => type).filter((item) => item.includes('addToFavorites'));

    expect(actions).toEqual([
      fetchAddToFavoritesAction.pending.type,
      fetchAddToFavoritesAction.fulfilled.type
    ]);
  });
});

