import {render, screen} from '@testing-library/react';
import ReviewItem from './review-item';
import '@testing-library/jest-dom/extend-expect';
import {makeFakeComment} from '../../utiles/mocks';

describe('Component: ReviewItem', () => {
  const fakeComment = makeFakeComment();

  it('should render correctly', () => {
    render(
      <ReviewItem {...fakeComment}/>
    );
    expect(screen.getByAltText(/Reviews avatar/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('review').length).toBe(1);
  });
});
