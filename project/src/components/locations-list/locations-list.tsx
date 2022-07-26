import Location from '../../components/location/location';
import {City} from '../../types/types';

type LocationsListProps = {
  cities: City[];
};

export default function LocationsList({cities}: LocationsListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <Location key={city.name} name={city.name}/>)}
    </ul>
  );
}
