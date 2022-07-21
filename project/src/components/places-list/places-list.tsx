import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {Place} from '../../types/types';

type PlacesListProps = {
  places: Place[]
};

function PlacesList(props: PlacesListProps): JSX.Element {
  const {places} = props;
  const [state, setState] = useState(0);

  const mouseOverHandler = (id: number) => {
    if (id !== state) {
      setState(id);
    }
    // console.log(state);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} {...place} mouseOverHandler={mouseOverHandler}/>)}
    </div>
  );
}

export default PlacesList;
