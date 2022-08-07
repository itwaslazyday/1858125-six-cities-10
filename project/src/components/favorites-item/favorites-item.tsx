import {Place} from '../../types/types';
import PlaceCard from '../../components/place-card/place-card';

type FavoritesItemProps = {
  offers: Place[];
  city: string;
};

export default function FavoritesItem(props: FavoritesItemProps): JSX.Element {
  const {offers, city} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="\">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <PlaceCard key={offer.id} place={offer} classPrefix='cities'/>)}
      </div>
    </li>
  );
}
