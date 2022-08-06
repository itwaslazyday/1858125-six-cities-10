import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {checkAuthAction, fetchCommentsAction, fetchOfferAction, fetchNearbyPlacesAction} from '../api-actions';
import {ErrorsProcess} from '../../types/state';

const initialState: ErrorsProcess = {
  authError: null,
  offerDataError: false,
  offerCommentsError: false,
  offerNearbyError: false
};

export const errorsProcess = createSlice({
  name: NameSpace.User,
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
      .addCase(checkAuthAction.rejected, (state, action) => {
        state.authError = action.error;
      });
  }
});
