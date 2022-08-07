import SiteHeader from '../../components/site-header/site-header';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {getFavoriteOffers} from '../../store/offers-process/selectors';
import FavoritesItem from '../../components/favorites-item/favorites-item';
import {getOffersByCity} from '../../utiles/utiles';
import {cities} from '../../const';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const offersByCity = getOffersByCity(favoriteOffers);

  return (
    <div className="page">
      <SiteHeader headerFavoriteCount={favoriteOffers.length}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => offersByCity[city.name].length !== 0 ? <FavoritesItem key={city.name} offers={offersByCity[city.name]} city={city.name} /> : '')}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
