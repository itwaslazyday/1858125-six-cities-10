import {render, screen} from '@testing-library/react';
import FavoritesItem from './favorites-item';
import '@testing-library/jest-dom/extend-expect';
import { makeFakeOffersProcess } from '../../utiles/mocks';
import HistoryRouter from '../history-router/history-router';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import { getOffersByCity } from '../../utiles/utiles';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';

describe('Component: FavoritesItem', () => {
  const history = createMemoryHistory();
  const city = 'Amsterdam';
  const mockOffers = makeFakeOffersProcess().map((item) => ({...item, isFavorite: true, city: {...item.city, name: city}}));
  const offersByCity = getOffersByCity(mockOffers);

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
              element={<FavoritesItem city={city} offers={offersByCity[city]}/>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('place-card').length).toBe(offersByCity[city].length);

    await userEvent.click(screen.getByText(/Amsterdam/i));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
