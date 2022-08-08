import PlaceCard from '../place-card/place-card';
import {Place} from '../../types/types';
import {useMemo, memo} from 'react';
import {getSortedPlaces} from '../../utiles/utiles';

type PlacesListProps = {
  currentPlaces: Place[];
  setHoveredCard: (place: Place | undefined) => void;
  currentSortType: string;
};

function PlacesList({currentPlaces, setHoveredCard, currentSortType}: PlacesListProps): JSX.Element {
  const sortedPlaces = useMemo(() => getSortedPlaces(currentPlaces, currentSortType), [currentPlaces, currentSortType]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedPlaces.map((place) => <PlaceCard key={place.id} place={place} classPrefix='cities' setHoveredCard={setHoveredCard} />)}
    </div>
  );
}

export default memo(PlacesList);
