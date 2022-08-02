import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Place, Review, NewReview} from '../types/types.js';
import {setOffers, setAuthorization, setError, setDataLoadedStatus, setAuthInfo, setOffer, setComments, setNearbyPlaces} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/offers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Place[]>(APIRoute.Offers);
    dispatch(setOffers(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/offer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Place>(`${APIRoute.Offers}/${id}`);
      dispatch(setOffer(data));
    } catch {
      dispatch(setError('Offer data error'));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/comments',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      dispatch(setComments(data));
    } catch {
      dispatch(setError('Comments data error'));
    }
  },
);

export const fetchNearbyPlacesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/nearby',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Place[]>(`${APIRoute.Offers}/${id}/nearby`);
      dispatch(setNearbyPlaces(data));
    } catch {
      dispatch(setError('Nearby data error'));
    }
  },
);

export const fetchNewCommentAction = createAsyncThunk<void, NewReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/comments/new',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {rating, comment});
    dispatch(setComments(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
      dispatch(setAuthInfo(data));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setAuthInfo(null));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setAuthorization(AuthorizationStatus.Auth));
    dispatch(setAuthInfo(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setAuthInfo(null));
  },
);
