import PlaceCard from '../place-card/place-card';
import {Place} from '../../types/types';

type PlacesListProps = {
  places: Place[];
  setHoveredCard: (place: Place | undefined) => void;
};

function PlacesList({places, setHoveredCard}: PlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} place={place} classPrefix='cities' setHoveredCard={setHoveredCard} />)}
    </div>
  );
}

export default PlacesList;
