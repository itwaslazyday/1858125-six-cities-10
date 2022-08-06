import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { SerializedError } from '@reduxjs/toolkit';

const getAuthError = (state: State): string | null | SerializedError => state[NameSpace.Errors].authError;
const getOfferCoomentsError = (state: State): boolean => state[NameSpace.Errors].offerCommentsError;
const getOfferDataError = (state: State): boolean => state[NameSpace.Errors].offerDataError;
const getOfferNearbyError = (state: State): boolean => state[NameSpace.Errors].offerNearbyError;

export {getAuthError, getOfferCoomentsError, getOfferDataError, getOfferNearbyError};
