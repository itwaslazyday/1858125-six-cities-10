import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchOffersAction, fetchFavoritesAction} from '../api-actions';
import {OffersProcess} from '../../types/state';

const initialState: OffersProcess = {
  city: 'Paris',
  offers: [],
  isDataLoaded: false,
  favoriteOffers: []
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  }
});

export const {changeCity} = offersProcess.actions;
