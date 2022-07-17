import {useState} from 'react';
import FormRating from '../ form-rating/form-rating';

function FormReview(): JSX.Element {
  const [formState, setFormState] = useState(
    {
      rating: '',
      review: '',
    }
  );

  const fieldChangeHandler = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormState({...formState, [name]: value});
  };

  const getRatingFields = () => {
    const ratingFields = [];
    for (let i = 5; i > 0; i--) {
      ratingFields.push(<FormRating key={i} index={i} fieldChangeHandler={fieldChangeHandler}/>);
    }
    return ratingFields;
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getRatingFields()}
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={fieldChangeHandler} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default FormReview;
