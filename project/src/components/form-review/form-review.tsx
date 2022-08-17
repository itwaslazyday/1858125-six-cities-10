import React, {memo, useState} from 'react';
import FormRating from '../ form-rating/form-rating';
import {fetchNewCommentAction} from '../../store/api-actions';
import {NewReview} from '../../types/types';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {FormEvent} from 'react';
import {ReviewLength} from '../../const';
import {getNewCommentError} from '../../store/errors-process/selectors';
import './newCommentError.css';
import {changeNewCommentError} from '../../store/errors-process/errors-process';

type FormReviewProps = {
  currentId: number;
};

function FormReview({currentId}: FormReviewProps): JSX.Element {
  const dispatch = useAppDispatch();
  const newCommentError = useAppSelector(getNewCommentError);

  const [formState, setFormState] = useState<NewReview>(
    {
      rating: 0,
      review: '',
      id: currentId
    }
  );
  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormState({...formState, [name]: value});
    dispatch(changeNewCommentError(false));
  };

  const clearNewCommentError = () => setTimeout(() => {
    dispatch(changeNewCommentError(false));
  }, 2500);

  const getRatingFields = () => {
    const ratingFields = [];
    for (let i = 5; i > 0; i--) {
      ratingFields.push(
        <FormRating key={i} index={i} handleFieldChange={handleFieldChange}
          isChecked={Number(formState.rating) === i} isDisabled={formDisabled}
        />
      );
    }
    return ratingFields;
  };

  const onSubmit = async (newReview: NewReview) => {
    await dispatch(fetchNewCommentAction(newReview));
    setFormDisabled(false);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);
    onSubmit(formState);
    setFormState({...formState, review: '', rating: 0});
    clearNewCommentError();
  };

  return (
    <form className={`reviews__form form ${newCommentError ? '' : ''}`}
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
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
        disabled={formDisabled}
        data-testid="review"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        {newCommentError ?
          <p className='comment-error'>Ocurred an error during posting your comment :( Please, try one more time.</p> :
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>}
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(formState.rating > 0
            && formState.review.length >= ReviewLength.Min
            && formState.review.length < ReviewLength.Max)}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default memo(FormReview);
