import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import PlacesList from './places-list';
import { makeFakeOfferProcess, makeFakeOffersProcess } from '../../utiles/mocks';
import { Place } from '../../types/types';

const history = createMemoryHistory();
const mockOffers = makeFakeOffersProcess();
const mockOffer = makeFakeOfferProcess().room as Place;

describe('Component: PlacesList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlacesList currentPlaces={mockOffers} setHoveredCard={() => mockOffer} currentSortType='Popular'/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByTestId('place-card').length).toBe(mockOffers.length);
  });
});
