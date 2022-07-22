import {places, cities} from '../../fish/fish-offers';
import SiteHeader from '../../components/site-header/site-header';
import Location from '../../components/location/location';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {useState} from 'react';
import {Place} from '../../types/types';

type MainPageProps = {
  placeCount: number;
};

function MainPage({placeCount}: MainPageProps): JSX.Element {

  const [state, setState] = useState<Place | undefined>(undefined);
  const checkPlaceOnMap = (place: Place) => {
    setState(places.find((item) => item.id === place.id));
  };

  return (
    <div className="page page--gray page--main">
      <SiteHeader headerFavoriteCount={3}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => <Location key={city.title} name={city.title}/>)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <PlacesList places={places} checkPlaceOnMap={checkPlaceOnMap}/>
            </section>
            <div className="cities__right-section">
              <Map places={places} classPrefix='cities' city={cities[3]} selectedPoint={state}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
