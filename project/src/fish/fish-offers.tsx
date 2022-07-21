import {Place, City} from '../types/types';

const places: Place[] = [
  {
    isPremium: true,
    bookmarks: true,
    price: 120,
    rating: 80,
    description: 'Beautiful & luxurious apartment at great location',
    placeType: 'Apartment',
    id: 0,
    lat: 52.469553943508,
    lng: 4.85309666406198
  },
  {
    isPremium: false,
    bookmarks: true,
    price: 80,
    rating: 80,
    description: 'Wood and stone place',
    placeType: 'Private room',
    id: 1,
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  },
  {
    isPremium: false,
    bookmarks: false,
    price: 132,
    rating: 80,
    description: 'Canal View Prinsengracht',
    placeType: 'Apartment',
    id: 2,
    lat: 52.5909553943508,
    lng: 4.929309666406198
  },
  {
    isPremium: true,
    bookmarks: false,
    price: 180,
    rating: 100,
    description: 'Nice, cozy, warm big bed apartment',
    placeType: 'Apartment',
    id: 3,
    lat: 52.2809553943508,
    lng: 4.939309666406198
  },
  {
    isPremium: false,
    bookmarks: true,
    price: 80,
    rating: 80,
    description: 'Fake hostel',
    placeType: 'Private room',
    id: 4,
    lat: 52.3809553943508,
    lng: 4.959309666406198
  },
];

const cities: City[] = [
  {
    title: 'Paris',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Cologne',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Brussels',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Amsterdam',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Hamburg',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Dusseldorf',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    zoom: 10
  }
];

export {places, cities};
