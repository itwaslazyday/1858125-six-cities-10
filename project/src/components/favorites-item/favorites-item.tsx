import {Place} from '../../types/types';
import PlaceCard from '../../components/place-card/place-card';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {changeCity} from '../../store/offers-process/offers-process';
import { memo } from 'react';

type FavoritesItemProps = {
  offers: Place[];
  city: string;
};

function FavoritesItem(props: FavoritesItemProps): JSX.Element {
  const {offers, city} = props;
  const dispatch = useAppDispatch();

  return (
    <li
      className="favorites__locations-items"
      onClick={() => {dispatch(changeCity(city));}}
    >
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <PlaceCard key={offer.id} place={offer} classPrefix='favorites'/>)}
      </div>
    </li>
  );
}

export default memo(FavoritesItem);
