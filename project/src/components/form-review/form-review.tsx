import {memo, useState} from 'react';
import FormRating from '../ form-rating/form-rating';
import {fetchNewCommentAction} from '../../store/api-actions';
import {NewReview} from '../../types/types';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {FormEvent} from 'react';

type FormReviewProps = {
  currentId: number;
};

function FormReview({currentId}: FormReviewProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<NewReview>(
    {
      rating: 0,
      review: '',
      id: currentId
    }
  );

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormState({...formState, [name]: value});
  };

  const getRatingFields = () => {
    const ratingFields = [];
    for (let i = 5; i > 0; i--) {
      ratingFields.push(<FormRating key={i} index={i} handleFieldChange={handleFieldChange} isChecked={Number(formState.rating) === i}/>);
    }
    return ratingFields;
  };

  const onSubmit = (newReview: NewReview) => {
    dispatch(fetchNewCommentAction(newReview));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(formState);
    setFormState({...formState, review: '', rating: 0});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getRatingFields()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={formState.review}
        onChange={handleFieldChange}
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        data-testid="review"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formState.rating > 0 && formState.review)}>Submit</button>
      </div>
    </form>
  );
}

export default memo(FormReview);
