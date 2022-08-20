import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../history-router/history-router';
import LoginForm from './login-form';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore();

describe('Component: LoginForm', () => {
  it('correct form render & testing typing data', async () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <LoginForm />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('login'), 'tourist');
    await userEvent.type(screen.getByTestId('password'), '12abc');

    expect(screen.getByDisplayValue(/tourist/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/12abc/i)).toBeInTheDocument();
  });
});
