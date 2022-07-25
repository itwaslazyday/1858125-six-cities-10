import ReviewItem from '../../components/review-item/review-item';
import {Review} from '../../types/types';

type ReviewsListProps = {
  reviews: Review[]
};

function ReviewsList(props: ReviewsListProps): JSX.Element {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} {...review} />)}
    </ul>
  );
}

export default ReviewsList;
