import PlaceCard from '../place-card/place-card';
import {Place} from '../../types/types';

type PlacesListProps = {
  places: Place[];
  handlePlaceHover: (place: Place) => void;
  handlePlaceLeave: () => void;
};

function PlacesList({places, handlePlaceHover, handlePlaceLeave}: PlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} place={place} classPrefix='cities' handlePlaceHover={handlePlaceHover} handlePlaceLeave={handlePlaceLeave}/>)}
    </div>
  );
}

export default PlacesList;
