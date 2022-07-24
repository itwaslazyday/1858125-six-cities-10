import PlaceCard from '../place-card/place-card';
import {Place} from '../../types/types';

type PlacesListProps = {
  places: Place[];
  setMainPageState: (place: Place | undefined) => void;
};

function PlacesList({places, setMainPageState}: PlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} place={place} classPrefix='cities' setMainPageState={setMainPageState} />)}
    </div>
  );
}

export default PlacesList;
