import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { Review } from '../../types/types';
import { Place } from '../../types/types';

const getComments = (state: State): Review[] | null => state[NameSpace.Offer].comments;
const getNearby = (state: State): Place[] | null => state[NameSpace.Offer].nearby;
const getRoom = (state: State): Place | null => state[NameSpace.Offer].room;

export {getComments, getNearby, getRoom};
