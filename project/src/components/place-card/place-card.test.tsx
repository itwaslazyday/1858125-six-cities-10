import {render, screen} from '@testing-library/react';
import PlaceCard from './place-card';
import '@testing-library/jest-dom/extend-expect';
import { makeFakeOfferProcess } from '../../utiles/mocks';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import { Place } from '../../types/types';

describe('Component: PlaceCard', () => {
  const history = createMemoryHistory();
  const mockOffer = makeFakeOfferProcess().room as Place;
  mockOffer.title = 'Friends';

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlaceCard place={mockOffer} classPrefix='cities' setHoveredCard={() => null}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Friends/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('place-card').length).toBe(1);
  });
});
