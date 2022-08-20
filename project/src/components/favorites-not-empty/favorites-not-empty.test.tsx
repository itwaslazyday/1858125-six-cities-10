import {render, screen} from '@testing-library/react';
import FavoritesNotEmpty from './favorites-not-empty';
import '@testing-library/jest-dom/extend-expect';
import { cities } from '../../const';
import { makeFakeOffersProcess } from '../../utiles/mocks';
import HistoryRouter from '../history-router/history-router';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Component: FavoritesNotEmpty', () => {
  const history = createMemoryHistory();
  const mockOffers = makeFakeOffersProcess().map((item) => ({...item, isFavorite: true, city: {...item.city, name: 'Amsterdam'}}));

  it('should render correctly', async () => {
    history.push('/favorites');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/"
              element={<h1>This is main page</h1>}
            />
            <Route
              path='/favorites'
              element={<FavoritesNotEmpty cities={cities} favoriteOffers={mockOffers}/>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByTestId('place-card').length).toBe(mockOffers.length);
    await userEvent.click(screen.getByText(/Amsterdam/i));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
