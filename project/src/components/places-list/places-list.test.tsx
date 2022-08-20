import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import PlacesList from './places-list';
import { makeFakeOfferProcess, makeFakeOffersProcess } from '../../utiles/mocks';
import { Place } from '../../types/types';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';

const history = createMemoryHistory();
const mockOffers = makeFakeOffersProcess();
const mockOffer = makeFakeOfferProcess().room as Place;

describe('Component: PlacesList', () => {
  history.push('/');
  it('should render & open property page correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/"
              element={<PlacesList currentPlaces={mockOffers} setHoveredCard={() => mockOffer} currentSortType='Popular'/>}
            />
            <Route
              path={`/offer/${mockOffers[1].id}`}
              element={<h1>This is property page</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByTestId('place-card').length).toBe(mockOffers.length);

    await userEvent.click(screen.getAllByAltText('Place')[1]);
    expect(screen.getByText(/This is property page/i)).toBeInTheDocument();
  });
});
