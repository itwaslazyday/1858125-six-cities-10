import SiteHeader from '../../components/site-header/site-header';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {useMemo, useState} from 'react';
import {Place} from '../../types/types';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import SortingList from '../../components/sorting-list/sorting-list';
import {SortType, cities} from '../../const';
import {getCity} from '../../store/offers-process/selectors';
import {getOffers} from '../../store/offers-process/selectors';

function MainPage(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<Place | undefined>(undefined);
  const [currentSortType, changeSortType] = useState<string>(SortType.Popular);
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const currentPlaces = useMemo(() => offers.filter((offer) => offer.city.name === city), [city, offers]);

  return (
    <div className="page page--gray page--main">
      <SiteHeader />
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
              <b className="places__found">{currentPlaces.length} places to stay in {city}</b>
              <SortingList changeSortType={changeSortType} currentSortType={currentSortType}/>
              <PlacesList currentPlaces={currentPlaces} currentSortType={currentSortType} setHoveredCard={setHoveredCard}/>
            </section>
            <div className="cities__right-section">
              <Map places={currentPlaces} classPrefix='cities' selectedPoint={hoveredCard} city={city}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
