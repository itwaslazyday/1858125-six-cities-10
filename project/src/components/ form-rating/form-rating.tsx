import React from 'react';
type FormRatingProps = {
  index: number;
  fieldChangeHandler: (evt: any) => void;
};

function FormRating(props: FormRatingProps): JSX.Element {
  const {index, fieldChangeHandler} = props;
  return (
    <React.Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio" onChange={fieldChangeHandler} />
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

export default FormRating;
