import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import ReviewsList from './reviews-list';
import {makeFakeComment} from '../../utiles/mocks';
import { Review } from '../../types/types';

const history = createMemoryHistory();
const mockComments = new Array(15).fill(null).map(() => makeFakeComment()) as Review[];

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewsList reviews={mockComments}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByTestId('review').length).toBe(10);
  });
});
