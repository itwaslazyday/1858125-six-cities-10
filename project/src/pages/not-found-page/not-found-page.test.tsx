import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import NotFoundPage from './not-found-page';
import {Provider} from 'react-redux';
import { store } from '../../store';
import '@testing-library/jest-dom/extend-expect';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NotFoundPage />
        </HistoryRouter>
      </Provider>
    );

    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Back to main');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
