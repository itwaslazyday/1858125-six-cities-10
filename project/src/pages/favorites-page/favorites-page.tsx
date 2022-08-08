import SiteHeader from '../../components/site-header/site-header';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {getFavoriteOffers} from '../../store/offers-process/selectors';
import {cities} from '../../const';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesNotEmpty from '../../components/favorites-not-empty/favorites-not-empty';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <SiteHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length ?
            <FavoritesNotEmpty cities={cities} favoriteOffers={favoriteOffers}/> :
            <FavoritesEmpty/>}
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
