import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {checkAuthAction, fetchCommentsAction, fetchOfferAction, fetchNearbyPlacesAction, loginAction, fetchNewCommentAction, fetchOffersAction} from '../api-actions';
import {ErrorsProcess} from '../../types/state';

const initialState: ErrorsProcess = {
  authError: false,
  offersDataError: false,
  offerDataError: false,
  offerCommentsError: false,
  newCommentError: false,
  offerNearbyError: false
};

export const errorsProcess = createSlice({
  name: NameSpace.Errors,
  initialState,
  reducers: {
    changeNewCommentError: (state, action) => {
      state.newCommentError = action.payload;
    },
    changeOfferDataError: (state, action) => {
      state.offerDataError = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersDataError = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state) => {
        state.offersDataError = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerDataError = true;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.offerCommentsError = true;
      })
      .addCase(fetchNewCommentAction.rejected, (state) => {
        state.newCommentError = true;
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

export const {changeNewCommentError, changeOfferDataError} = errorsProcess.actions;
