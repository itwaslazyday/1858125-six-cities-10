type Place = {
  isPremium: boolean;
  price: number;
  rating: number;
  description: string;
  placeType: string;
  id: number;
};

const places: Place[] = [
  {
    isPremium: true,
    price: 120,
    rating: 80,
    description: 'Beautiful &amp; luxurious apartment at great location',
    placeType: 'Apartment',
    id: 0,
  },
  {
    isPremium: false,
    price: 80,
    rating: 80,
    description: 'Wood and stone place',
    placeType: 'Private room',
    id: 1,
  },
  {
    isPremium: false,
    price: 132,
    rating: 80,
    description: 'Canal View Prinsengracht',
    placeType: 'Apartment',
    id: 2
  },
  {
    isPremium: true,
    price: 180,
    rating: 100,
    description: 'Nice, cozy, warm big bed apartment',
    placeType: 'Apartment',
    id: 3,
  },
  {
    isPremium: false,
    price: 80,
    rating: 80,
    description: 'Wood and stone place',
    placeType: 'Private room',
    id: 4,
  },
];

const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export {places, cities};
