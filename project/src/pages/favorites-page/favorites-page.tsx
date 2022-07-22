import SiteHeader from '../../components/site-header/site-header';
import PlaceCard from '../../components/place-card/place-card';
import {Place} from '../../types/types';

type FavoritesPageProps = {
  places: Place[]
};


function FavoritesPage(props: FavoritesPageProps): JSX.Element {
  const {places} = props;
  return (
    <div className="page">
      <SiteHeader headerFavoriteCount={3}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="\#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard place={places[0]} classPrefix='cities' checkPlaceOnMap={() => null}/>
                  <PlaceCard place={places[1]} classPrefix='cities' checkPlaceOnMap={() => null}/>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="\#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard place={places[2]} classPrefix='cities' checkPlaceOnMap={() => null}/>
                </div>
              </li>
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
