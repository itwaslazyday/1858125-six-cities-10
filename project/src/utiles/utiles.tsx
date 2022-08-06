import {SortType} from '../const';
import {Place} from '../types/types';
import dayjs from 'dayjs';

const humanizeDate = (date: string, format: string) => dayjs(date).format(format);

const sortHighToLow = (placeA: Place, placeB: Place) => placeB.price - placeA.price;

const sortLowToHigh = (placeA: Place, placeB: Place) => placeA.price - placeB.price;

const sortByTopRated = (placeA: Place, placeB: Place) => placeB.rating - placeA.rating;

const getSortedPlaces = (places: Place[], sortType: string) => {
  let sortedPlaces;
  switch (sortType) {
    case SortType.LowToHigh:
      sortedPlaces = places.sort(sortLowToHigh);
      break;
    case SortType.HighToLow:
      sortedPlaces = places.sort(sortHighToLow);
      break;
    case SortType.TopRated:
      sortedPlaces = places.sort(sortByTopRated);
      break;
    default:
      sortedPlaces = places;
  }
  return sortedPlaces;
};

export {getSortedPlaces, humanizeDate};
