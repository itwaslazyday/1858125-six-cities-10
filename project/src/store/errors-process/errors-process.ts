import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {checkAuthAction, fetchCommentsAction, fetchOfferAction, fetchNearbyPlacesAction, loginAction, fetchNewCommentAction} from '../api-actions';
import {ErrorsProcess} from '../../types/state';

const initialState: ErrorsProcess = {
  authError: false,
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
    }
  },
  extraReducers(builder) {
    builder
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

export const {changeNewCommentError} = errorsProcess.actions;
