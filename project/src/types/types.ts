type Place = {
  isPremium: boolean;
  bookmarks: boolean;
  price: number;
  rating: number;
  description: string;
  placeType: string;
  id: number;
  lat: number,
  lng: number
};

type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type {Place, City};
