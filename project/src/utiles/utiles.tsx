import {SortType} from '../const';
import {Place} from '../types/types';
import dayjs from 'dayjs';

const getRandomInteger = (min: number, max: number) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};


const humanizeDate = (date: string, format: string) => dayjs(date).format(format);

const getSortedPlaces = (places: Place[], sortType: string) => {
  const sortHighToLow = (placeA: Place, placeB: Place) => placeB.price - placeA.price;
  const sortLowToHigh = (placeA: Place, placeB: Place) => placeA.price - placeB.price;
  const sortByTopRated = (placeA: Place, placeB: Place) => placeB.rating - placeA.rating;

  let sortedPlaces;
  switch (sortType) {
    case SortType.LowToHigh:
      sortedPlaces = places.slice().sort(sortLowToHigh);
      break;
    case SortType.HighToLow:
      sortedPlaces = places.slice().sort(sortHighToLow);
      break;
    case SortType.TopRated:
      sortedPlaces = places.slice().sort(sortByTopRated);
      break;
    default:
      sortedPlaces = places;
  }
  return sortedPlaces;
};

const getOffersByCity = (offers: Place[]): {[key: string]: Place[]} => ({
  'Paris': offers.filter((offer) => offer.city.name === 'Paris'),
  'Cologne': offers.filter((offer) => offer.city.name === 'Cologne'),
  'Brussels': offers.filter((offer) => offer.city.name === 'Brussels'),
  'Amsterdam': offers.filter((offer) => offer.city.name === 'Amsterdam'),
  'Hamburg': offers.filter((offer) => offer.city.name === 'Hamburg'),
  'Dusseldorf': offers.filter((offer) => offer.city.name === 'Dusseldorf')
});

export {getSortedPlaces, humanizeDate, getOffersByCity, getRandomInteger};
