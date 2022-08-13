import {render, screen} from '@testing-library/react';
import FavoritesItem from './favorites-item';
import '@testing-library/jest-dom/extend-expect';
import { makeFakeOffersProcess } from '../../utiles/mocks';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import { getOffersByCity } from '../../utiles/utiles';

describe('Component: FavoritesItem', () => {
  const history = createMemoryHistory();
  const city = 'Amsterdam';
  const mockOffers = makeFakeOffersProcess().map((item) => ({...item, isFavorite: true, city: {...item.city, name: city}}));
  const offersByCity = getOffersByCity(mockOffers);

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesItem city={city} offers={offersByCity[city]}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('place-card').length).toBe(offersByCity[city].length);
  });
});
