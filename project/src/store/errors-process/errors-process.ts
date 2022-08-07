import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {checkAuthAction, fetchCommentsAction, fetchOfferAction, fetchNearbyPlacesAction, loginAction} from '../api-actions';
import {ErrorsProcess} from '../../types/state';

const initialState: ErrorsProcess = {
  authError: false,
  offerDataError: false,
  offerCommentsError: false,
  offerNearbyError: false
};

export const errorsProcess = createSlice({
  name: NameSpace.Errors,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerDataError = true;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.offerCommentsError = true;
      })
      .addCase(fetchNearbyPlacesAction.rejected, (state) => {
        state.offerNearbyError = true;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authError = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authError = false;
      });
  }
});
