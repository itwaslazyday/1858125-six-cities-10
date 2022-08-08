import Location from '../../components/location/location';
import {City} from '../../types/types';
import {memo} from 'react';

type LocationsListProps = {
  cities: City[];
};

function LocationsList({cities}: LocationsListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <Location key={city.name} name={city.name}/>)}
    </ul>
  );
}

export default memo(LocationsList);
