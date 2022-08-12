import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import LocationsList from './locations-list';
import { cities } from '../../const';

const history = createMemoryHistory();

describe('Component: LocationsList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LocationsList cities={cities} />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });
});
