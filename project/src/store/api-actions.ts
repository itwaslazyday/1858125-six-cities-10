import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Place, Review, NewReview, FavoriteStatus} from '../types/types.js';
import {saveToken, dropToken} from '../services/token';
import {APIRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

export const fetchOffersAction = createAsyncThunk<Place[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/offers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Place[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Place, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/offer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Place>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/comments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const fetchNearbyPlacesAction = createAsyncThunk<Place[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/nearby',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Place[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchNewCommentAction = createAsyncThunk<Review[], NewReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addComment',
  async ({id, rating, review}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {rating, comment: review});
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<Place[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/favorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Place[]>(APIRoute.Favorite);
    return data;
  },
);

export const fetchAddToFavoritesAction = createAsyncThunk<void, FavoriteStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addToFavorites',
  async ({id, status, currentId}, {dispatch, extra: api}) => {
    await api.post<Place>(`${APIRoute.Favorite}/${id}/${status}`);
    dispatch(fetchOffersAction());
    dispatch(fetchOfferAction(currentId ? currentId : id));
    dispatch(fetchFavoritesAction());
    if (currentId) {dispatch(fetchNearbyPlacesAction(currentId));}
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
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
  },
);
