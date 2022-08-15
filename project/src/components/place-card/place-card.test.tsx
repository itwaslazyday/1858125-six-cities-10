import {render, screen} from '@testing-library/react';
import PlaceCard from './place-card';
import '@testing-library/jest-dom/extend-expect';
import { makeFakeOfferProcess } from '../../utiles/mocks';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import { Place } from '../../types/types';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';

describe('Component: PlaceCard', () => {
  const history = createMemoryHistory();
  const mockOffer = makeFakeOfferProcess().room as Place;
  mockOffer.title = 'Friends';

  it('should render & open property page correctly', async () => {
    history.push('/');
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/"
              element={<PlaceCard place={mockOffer} classPrefix='cities' setHoveredCard={() => null}/>}
            />
            <Route
              path={`/offer/${mockOffer.id}`}
              element={<h1>This is property page</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Friends/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('place-card').length).toBe(1);

    await userEvent.click(screen.getAllByAltText('Place')[0]);
    expect(screen.getByText(/This is property page/i)).toBeInTheDocument();
  });
});
