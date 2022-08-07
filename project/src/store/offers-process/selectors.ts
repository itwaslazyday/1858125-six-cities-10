import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { Place } from '../../types/types';

const getCity = (state: State): string => state[NameSpace.Offers].city;
const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Offers].isDataLoaded;
const getOffers = (state: State): Place[] => state[NameSpace.Offers].offers;
const getFavoriteOffers = (state: State): Place[] => state[NameSpace.Offers].favoriteOffers;

export {getCity, getDataLoadedStatus, getOffers, getFavoriteOffers};
