import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import '@testing-library/jest-dom/extend-expect';
import SiteHeader from './site-header';
import { Provider } from 'react-redux';
import { store } from '../../store';

const history = createMemoryHistory();

describe('Component: SiteHeader', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SiteHeader />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
