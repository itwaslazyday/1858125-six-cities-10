import {Place, City, Review} from '../types/types';

const places: Place[] = [
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/12.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg'
    ],
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: true,
    isPremium: true,
    rating: 4.1,
    type: 'hotel',
    bedrooms: 2,
    maxAdults: 5,
    price: 393,
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Air conditioning'
    ],
    host: {
      id: 2509809,
      name: 'Kate',
      isPro: false,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: {
      latitude: 52.469553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    id: 1543543
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/11.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/2.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/18.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg'
    ],
    title: 'Fake hostel',
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: 'house',
    bedrooms: 2,
    maxAdults: 3,
    price: 654,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25234243,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    id: 220
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/6.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/2.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/12.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/17.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    isPremium: false,
    rating: 3,
    type: 'house',
    bedrooms: 4,
    maxAdults: 8,
    price: 198,
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Breakfast',
      'Towels',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      id: 2565768,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 52.5909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    id: 2234
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/19.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/2.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/18.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg'
    ],
    title: 'House of Big Mama',
    isFavorite: true,
    isPremium: true,
    rating: 3.3,
    type: 'house',
    bedrooms: 2,
    maxAdults: 3,
    price: 654,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 2543543,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.2809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    id: 287687
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/20.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/2.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/12.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/17.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg'
    ],
    title: 'Russian place',
    isFavorite: false,
    isPremium: false,
    rating: 3,
    type: 'house',
    bedrooms: 4,
    maxAdults: 8,
    price: 198,
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Breakfast',
      'Towels',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      id: 289,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.959309666406198,
      zoom: 16
    },
    id: 78
  }
];

const cities: City[] = [
  {
    title: 'Paris',
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Cologne',
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Brussels',
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Amsterdam',
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Hamburg',
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 10
  },
  {
    title: 'Dusseldorf',
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 10
  }
];

const reviews: Review[] = [
  {
    user: {
      avatarUrl: 'https://10.react.pages.academy/static/avatar/3.jpg',
      id: 442,
      isPro: false,
      name: 'Max'
    },
    rating: 80,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    id: 11,
    date: '2022-06-13T12:25:36.938Z'
  },
  {
    user: {
      avatarUrl: 'https://10.react.pages.academy/static/avatar/7.jpg',
      id: 40,
      isPro: false,
      name: 'Mary'
    },
    rating: 20,
    comment: 'One day there is the nightmare for a whole life...',
    id: 12,
    date: '2022-03-13T12:25:36.938Z'
  },
  {
    user: {
      avatarUrl: 'https://10.react.pages.academy/static/avatar/4.jpg',
      id: 413,
      isPro: false,
      name: 'Alex'
    },
    rating: 20,
    comment: 'God bless you from that place!',
    id: 10,
    date: '2022-11-13T12:25:36.938Z'
  },
];

const nearbyPlaces: Place[] = [
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/8.jpg',
    ],
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: true,
    isPremium: true,
    rating: 4.1,
    type: 'hotel',
    bedrooms: 2,
    maxAdults: 5,
    price: 393,
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Air conditioning'
    ],
    host: {
      id: 25098023449,
      name: 'Kate',
      isPro: false,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: {
      latitude: 52.469553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    id: 1543543
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/11.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/3.jpg',
    ],
    title: 'Fake hostel',
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: 'house',
    bedrooms: 2,
    maxAdults: 3,
    price: 654,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25243,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    id: 220
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/6.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/14.jpg',
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 3,
    type: 'house',
    bedrooms: 4,
    maxAdults: 8,
    price: 198,
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Breakfast',
      'Towels',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      id: 25768,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 52.5909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    id: 2234
  }
];

export {places, cities, reviews, nearbyPlaces};
