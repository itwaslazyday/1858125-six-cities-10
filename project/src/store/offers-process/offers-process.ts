import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchOffersAction} from '../api-actions';
import {OffersProcess} from '../../types/state';

const initialState: OffersProcess = {
  city: 'Paris',
  offers: [],
  isDataLoaded: false
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
      });
  }
});

export const {changeCity} = offersProcess.actions;
