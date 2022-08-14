import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import NearbyPlacesList from './nearby-places-list';
import { makeFakeOffersProcess } from '../../utiles/mocks';

const history = createMemoryHistory();
const mockOffers = makeFakeOffersProcess();

describe('Component: NearbyPlacesList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NearbyPlacesList places={mockOffers.slice(0, 3)}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByTestId('place-card').length).toBe(3);
  });
});
