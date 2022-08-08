import PlaceCard from '../place-card/place-card';
import {Place} from '../../types/types';
import { memo } from 'react';

type NearbyPlacesListProps = {
  places: Place[] | null;
};

function NearbyPlacesList(props: NearbyPlacesListProps): JSX.Element {
  const {places} = props;

  return (
    <div className="near-places__list places__list">
      {places?.map((place) => <PlaceCard key={place.id} place={place} classPrefix='near-places'/>)}
    </div>
  );
}

export default memo(NearbyPlacesList);
