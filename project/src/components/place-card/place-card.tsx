import {Link, useParams} from 'react-router-dom';
import {Place} from '../../types/types';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {fetchAddToFavoritesAction} from '../../store/api-actions';


type PlaceCardProps = {
  place: Place;
  classPrefix: string;
  setHoveredCard?: (place: Place | undefined) => void;
};

function PlaceCard({place, classPrefix, setHoveredCard}: PlaceCardProps): JSX.Element {
  const currentId = Number(useParams().id);
  const dispatch = useAppDispatch();
  const {id, isPremium, isFavorite, price, rating, title, type, previewImage} = place;

  const handleFavoriteButtonClick = () => {
    classPrefix === 'near-places' ?
      dispatch(fetchAddToFavoritesAction({status: +(!isFavorite), id, currentId})) :
      dispatch(fetchAddToFavoritesAction({status: +(!isFavorite), id}));
  };

  return (
    <article className={`${classPrefix}__card place-card`}
      onMouseOver={() => {if (setHoveredCard) {setHoveredCard(place);}}}
      onMouseLeave={() => {if (setHoveredCard) {setHoveredCard(undefined);}}}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={`${classPrefix === 'favorites' ? 150 : 260}`}
            height={`${classPrefix === 'favorites' ? 110 : 200}`}
            alt="Place"
          />
        </Link>
      </div>
      <div className={`${classPrefix === 'favorites' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
