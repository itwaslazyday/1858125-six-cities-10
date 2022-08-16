import {NameSpace} from '../../const';
import {State} from '../../types/state';

const getAuthError = (state: State): boolean => state[NameSpace.Errors].authError;
const getOfferCoomentsError = (state: State): boolean => state[NameSpace.Errors].offerCommentsError;
const getNewCommentError = (state: State): boolean => state[NameSpace.Errors].newCommentError;
const getOfferDataError = (state: State): boolean => state[NameSpace.Errors].offerDataError;
const getOfferNearbyError = (state: State): boolean => state[NameSpace.Errors].offerNearbyError;

export {getAuthError, getOfferCoomentsError, getOfferDataError, getOfferNearbyError, getNewCommentError};
