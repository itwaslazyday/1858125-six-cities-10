import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import LocationsList from './locations-list';
import { cities } from '../../const';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: LocationsList', () => {
  history.push('/fakeroute');
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/"
              element={<h1>This is main page</h1>}
            />
            <Route
              path='/fakeroute'
              element={<LocationsList cities={cities} />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText(/Cologne/i));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
