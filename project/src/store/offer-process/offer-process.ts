import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchOfferAction, fetchCommentsAction, fetchNearbyPlacesAction, fetchNewCommentAction} from '../api-actions';
import {OfferProcess} from '../../types/state';

const initialState: OfferProcess = {
  room: null,
  comments: [],
  nearby: []
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.room = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchNearbyPlacesAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
      })
      .addCase(fetchNewCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
