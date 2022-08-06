import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { Place } from '../../types/types';

const getCity = (state: State): string => state[NameSpace.Offers].city;
const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Offers].isDataLoaded;
const getOffers = (state: State): Place[] => state[NameSpace.Offers].offers;

export {getCity, getDataLoadedStatus, getOffers};
