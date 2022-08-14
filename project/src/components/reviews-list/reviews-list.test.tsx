import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import ReviewsList from './reviews-list';
import { makeFakeOfferProcess } from '../../utiles/mocks';
import { Review } from '../../types/types';

const history = createMemoryHistory();
const mockComments = makeFakeOfferProcess().comments as Review[];

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewsList reviews={mockComments}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByTestId('review').length).toBe(3);
  });
});
