import {City, Place} from '../../types/types';
import FavoritesItem from '../../components/favorites-item/favorites-item';
import { getOffersByCity } from '../../utiles/utiles';

type FavoritesNotEmptyProps = {
  cities: City[];
  favoriteOffers: Place[];
};

export default function FavoritesNotEmpty(props: FavoritesNotEmptyProps): JSX.Element {
  const {favoriteOffers, cities} = props;
  const offersByCity = getOffersByCity(favoriteOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => offersByCity[city.name].length !== 0 ? <FavoritesItem key={city.name} offers={offersByCity[city.name]} city={city.name} /> : '')}
      </ul>
    </section>
  );
}
