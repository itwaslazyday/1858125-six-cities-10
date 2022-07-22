import PlaceCard from '../place-card/place-card';
import {Place} from '../../types/types';

type PlacesListProps = {
  places: Place[];
  checkPlaceOnMap: (place: Place) => void;
};

function PlacesList({places, checkPlaceOnMap}: PlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} place={place} classPrefix='cities' checkPlaceOnMap={checkPlaceOnMap}/>)}
    </div>
  );
}

export default PlacesList;
