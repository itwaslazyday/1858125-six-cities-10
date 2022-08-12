import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import LoginPage from './login-page';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore();

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigate to "login" url', async () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <LoginPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('login'), 'tourist');
    await userEvent.type(screen.getByTestId('password'), '12abc');

    expect(screen.getByDisplayValue(/tourist/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/12abc/i)).toBeInTheDocument();
  });
});
