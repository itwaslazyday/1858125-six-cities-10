import { UserData } from '../types/user-data';
import { Place, Review } from '../types/types';
import {datatype, name, internet, image, address, random, date} from 'faker';
import { OfferProcess } from '../types/state';

const makeFakeUserInfo = (): UserData => ({
  id: datatype.number(),
  email: internet.email(),
  token: datatype.string(),
  avatarUrl: image.imageUrl(),
  isPro: datatype.boolean(),
  name: name.firstName()
});

const makeFakeCityName = (): string => (address.cityName());

const makeFakeOffer = () : Place => (
  (
    {
      city: {
        name: address.cityName(),
        location: {
          latitude: +address.latitude(),
          longitude: +address.longitude(),
          zoom: datatype.number({ min: 10, max: 13})
        }
      },
      previewImage: image.imageUrl(),
      images: new Array(3).fill(null).map(() => (image.image())),
      title: random.word(),
      isFavorite: datatype.boolean(),
      isPremium: datatype.boolean(),
      rating: datatype.number({ min: 0, max: 5, precision: 0.1}),
      type: random.word(),
      bedrooms: datatype.number({min: 1, max: 5}),
      maxAdults: datatype.number({min: 1, max: 2}),
      price: datatype.number({min: 1, max: 2000}),
      goods: new Array(5).fill(null).map(() => (random.words())),
      host: {
        id: datatype.number(),
        name: name.firstName(),
        isPro: datatype.boolean(),
        avatarUrl: image.imageUrl()
      },
      description: random.words(15),
      location: {
        latitude: +address.latitude(),
        longitude: +address.longitude(),
        zoom: datatype.number({ min: 10, max: 13})
      },
      id: datatype.number()
    })
);

const makeFakeComment = () : Review => ({
  comment: random.words(10),
  date: String(date.recent()),
  id: datatype.number(),
  rating: datatype.number({ min: 0, max: 5, precision: 0.1}),
  user: {
    avatarUrl: image.imageUrl(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.firstName(),
  }
});

const makeFakeOffersProcess = (): Place[] => new Array(5).fill(null).map(() => makeFakeOffer());

const makeFakeOfferProcess = (): OfferProcess => (
  {
    room: makeFakeOffer(),
    comments: new Array(3).fill(null).map(() => makeFakeComment()),
    nearby: new Array(3).fill(null).map(() => makeFakeOffer())
  }
);

export {makeFakeUserInfo, makeFakeOffersProcess, makeFakeCityName, makeFakeOfferProcess, makeFakeComment};
