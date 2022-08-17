import { memo } from 'react';
import ReviewItem from '../../components/review-item/review-item';
import {Review} from '../../types/types';

type ReviewsListProps = {
  reviews: Review[] | null
};

const sortRecentToOld = (commentA: Review, commentB: Review) => new Date(commentB.date).getTime() - new Date(commentA.date).getTime();

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  if (reviews) {reviews = [...reviews.slice(0, 10)].sort(sortRecentToOld);}

  return (
    <ul className="reviews__list">
      {reviews?.map((review) => <ReviewItem key={review.id} {...review} />)}
    </ul>
  );
}

export default memo(ReviewsList);
