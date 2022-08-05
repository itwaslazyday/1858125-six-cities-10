import React from 'react';
import {ChangeEvent} from 'react';

type FormRatingProps = {
  index: number;
  isChecked: boolean;
  handleFieldChange: (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ratingTitle: string[] = [
  'Run, Forest, run!',
  'Bad. Really bad :(',
  'Might be better!',
  'Good place!',
  'Awesome to stay!',
];

const getTitle = (index: number) => ratingTitle.find((_item, idx) => index === (idx + 1)) as string;

function FormRating({isChecked, handleFieldChange, index}: FormRatingProps): JSX.Element {

  return (
    <React.Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio" onChange={(evt) => {handleFieldChange(evt);}} checked={isChecked}/>
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={getTitle(index)}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

export default FormRating;
