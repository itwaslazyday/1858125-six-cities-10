import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import '@testing-library/jest-dom/extend-expect';
import SiteHeader from './site-header';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: SiteHeader', () => {
  it('should render correctly', async () => {
    history.push('/');
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/"
              element={<SiteHeader />}
            />
            <Route
              path='/login'
              element={<h1>You are at login page now</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText(/Sign in/i));
    expect(screen.getByText(/You are at login page now/i)).toBeInTheDocument();
  });
});
