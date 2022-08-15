import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import NearbyPlacesList from './nearby-places-list';
import { makeFakeOffersProcess } from '../../utiles/mocks';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();
const mockOffers = makeFakeOffersProcess();

describe('Component: NearbyPlacesList', () => {
  history.push('/');
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/"
              element={<NearbyPlacesList places={mockOffers.slice(0, 3)}/>}
            />
            <Route
              path={`/offer/${mockOffers[2].id}`}
              element={<h1>This is property page</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByTestId('place-card').length).toBe(3);

    await userEvent.click(screen.getAllByAltText('Place')[2]);

    expect(screen.getByText(/This is property page/i)).toBeInTheDocument();
  });
});
