import {render, screen} from '@testing-library/react';
import Location from './location';
import '@testing-library/jest-dom/extend-expect';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Component: Location', () => {
  const history = createMemoryHistory();
  const city = 'Amsterdam';
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
              path='*'
              element={<Location name={city}/>}
            />
          </Routes>
        </HistoryRouter>;
      </Provider>);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
