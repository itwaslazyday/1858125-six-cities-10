import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import LoginPage from './login-page';
import '@testing-library/jest-dom/extend-expect';
import { Route, Routes } from 'react-router-dom';

const mockStore = configureMockStore();

describe('Component: LoginPage', () => {
  it('should renderlogin page & redirect to main', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path='/'
              element={<h1>This is main page</h1>}
            />
            <Route
              path='/login'
              element={<LoginPage />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('random-city')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('random-city'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
