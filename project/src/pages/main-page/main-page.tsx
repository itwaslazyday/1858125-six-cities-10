import SiteHeader from '../../components/site-header/site-header';
import Location from '../../components/location/location';
import PlaceCard from '../../components/place-card/place-card';

type Place = {
  isPremium: boolean;
  price: number;
  rating: number;
  description: string;
  placeType: string;
  id: number;
};

const places: Place[] = [
  {
    isPremium: true,
    price: 120,
    rating: 80,
    description: 'Beautiful &amp; luxurious apartment at great location',
    placeType: 'Apartment',
    id: 0,
  },
  {
    isPremium: false,
    price: 80,
    rating: 80,
    description: 'Wood and stone place',
    placeType: 'Private room',
    id: 1,
  },
  {
    isPremium: false,
    price: 132,
    rating: 80,
    description: 'Canal View Prinsengracht',
    placeType: 'Apartment',
    id: 2
  },
  {
    isPremium: true,
    price: 180,
    rating: 100,
    description: 'Nice, cozy, warm big bed apartment',
    placeType: 'Apartment',
    id: 3,
  },
  {
    isPremium: false,
    price: 80,
    rating: 80,
    description: 'Wood and stone place',
    placeType: 'Private room',
    id: 4,
  },
];

const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

type MainPageProps = {
  placeCount: number;
};

function MainPage({placeCount}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <SiteHeader headerFavoriteCount={3}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => <Location key={city} name={city}/>)}
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
              <div className="cities__places-list places__list tabs__content">
                {places.map((place) => <PlaceCard key={place.id} {...place}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
