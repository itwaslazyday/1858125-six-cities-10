import PlaceCard from '../place-card/place-card';
import {Place} from '../../types/types';

type NearbyPlacesListProps = {
  places: Place[];
};

function NearbyPlacesList(props: NearbyPlacesListProps): JSX.Element {
  const {places} = props;

  return (
    <div className="near-places__list places__list">
      {places.map((place) => <PlaceCard key={place.id} place={place} classPrefix='near-places'/>)}
    </div>
  );
}

export default NearbyPlacesList;
