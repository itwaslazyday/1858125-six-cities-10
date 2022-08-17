import SiteHeader from '../../components/site-header/site-header';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import FormReview from '../../components/form-review/form-review';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearbyPlacesList from '../../components/nearby-places-list/nearby-places-list';
import Map from '../../components/map/map';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {fetchOfferAction, fetchCommentsAction, fetchNearbyPlacesAction, fetchAddToFavoritesAction} from '../../store/api-actions';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {AuthorizationStatus, AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getOfferDataError} from '../../store/errors-process/selectors';
import {getRoom, getNearby, getComments} from '../../store/offer-process/selectors';

function PropertyPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentId = Number(useParams().id);
  const room = useAppSelector(getRoom);
  const offerDataError = useAppSelector(getOfferDataError);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const nearby = useAppSelector(getNearby);
  const comments = useAppSelector(getComments);

  useEffect(() => {
    dispatch(fetchOfferAction(currentId));
    dispatch(fetchCommentsAction(currentId));
    dispatch(fetchNearbyPlacesAction(currentId));
  }, [currentId, dispatch]);

  if (!offerDataError) {
    if (!room || (room?.id !== currentId)) {
      return (<LoadingScreen />);
    }
  } else {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  const handleFavoriteButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchAddToFavoritesAction({status: +(!isFavorite), id}));
    } else {
      navigate(AppRoute.Login);
    }
  };

  const {isPremium, isFavorite, price, rating, title, maxAdults, bedrooms, type, host, description, images, id} = room;
  return (
    <div className="page">
      <SiteHeader />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images?.slice(0, 6).map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Studio view" />
                </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
                  <svg className="place-card__bookmark-icon" width="31" height="33">
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
                  {room?.goods.map((good) =>
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments?.slice(0, 10).length}</span></h2>
                <ReviewsList reviews={comments}/>
                {authorizationStatus === AuthorizationStatus.Auth ? <FormReview currentId={currentId}/> : ''}
              </section>
            </div>
          </div>
          <Map places={nearby?.concat(room)} classPrefix='property' selectedPoint={room} city={room.city.name}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearbyPlacesList places={nearby}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
