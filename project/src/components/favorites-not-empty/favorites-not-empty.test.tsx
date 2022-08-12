import {render, screen} from '@testing-library/react';
import FavoritesNotEmpty from './favorites-not-empty';
import '@testing-library/jest-dom/extend-expect';
import { cities } from '../../const';
import { makeFakeOffersProcess } from '../../utiles/mocks';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';

describe('Component: FavoritesNotEmpty', () => {
  const history = createMemoryHistory();
  const mockOffers = makeFakeOffersProcess().map((item) => ({...item, isFavorite: true, city: {...item.city, name: 'Amsterdam'}}));

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesNotEmpty cities={cities} favoriteOffers={mockOffers}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByTestId('place-card').length).toBe(mockOffers.length);
  });
});
