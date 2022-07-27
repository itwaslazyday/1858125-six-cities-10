import {cities} from '../../fish/fish-offers';
import SiteHeader from '../../components/site-header/site-header';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {useState} from 'react';
import {Place} from '../../types/types';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import SortingList from '../../components/sorting-list/sorting-list';
import {getSortedPlaces} from '../../utiles/utiles';

function MainPage(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<Place | undefined>(undefined);
  const city = useAppSelector((state) => state.city);
  const sortState = useAppSelector((state) => (state.sortType));
  const currentPlaces = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === city);
  const [currentSortType, changeSortType] = useState<string>(sortState);
  const sortedPlaces = getSortedPlaces(currentPlaces, currentSortType);

  return (
    <div className="page page--gray page--main">
      <SiteHeader headerFavoriteCount={3}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedPlaces.length} places to stay in {city}</b>
              <SortingList changeSortType={changeSortType}/>
              <PlacesList places={sortedPlaces} setHoveredCard={setHoveredCard}/>
            </section>
            <div className="cities__right-section">
              <Map places={sortedPlaces} classPrefix='cities' selectedPoint={hoveredCard} city={city}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
