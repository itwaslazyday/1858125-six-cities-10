import SiteHeader from '../../components/site-header/site-header';
import {useParams} from 'react-router-dom';
import {reviews} from '../../fish/fish-offers';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FormReview from '../../components/form-review/form-review';
import ReviewsList from '../../components/reviews-list/reviews-list';
import {Place} from '../../types/types';
import NearbyPlacesList from '../../components/nearby-places-list/nearby-places-list';
import {nearbyPlaces} from '../../fish/fish-offers';
import Map from '../../components/map/map';
import {cities} from '../../fish/fish-offers';

type PropertyPageProps = {
  places: Place[]
};

function PropertyPage(props: PropertyPageProps): JSX.Element {
  const {places} = props;
  const params = useParams();
  const tappedPlace = places.find((place) => String(place.id) === params.id);
  if (tappedPlace) {
    const {isPremium, price, rating, title, maxAdults, bedrooms, type, host, description} = tappedPlace;

    return (
      <div className="page">
        <SiteHeader headerFavoriteCount={3}/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/room.jpg" alt="Studio view" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-01.jpg" alt="Studio view" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-02.jpg" alt="Studio view" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-03.jpg" alt="Studio view" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/studio-01.jpg" alt="Studio view" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-01.jpg" alt="Studio view" />
                </div>
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <div className="property__mark"><span>Premium</span></div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${rating * 20}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {tappedPlace.goods.map((good) =>
                      (<li className="property__inside-item" key={good}>{good}</li>))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
                      <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    <span className="property__user-status">
                      {host.isPro && 'Pro'}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviews={reviews}/>
                  <FormReview />
                </section>
              </div>
            </div>
            <Map places={nearbyPlaces} classPrefix='property' city={cities[3]} selectedPoint={undefined}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearbyPlacesList places={nearbyPlaces}/>
            </section>
          </div>
        </main>
      </div>
    );
  }

  return <NotFoundPage />;
}

export default PropertyPage;
