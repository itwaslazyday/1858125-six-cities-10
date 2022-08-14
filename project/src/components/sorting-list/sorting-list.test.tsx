import {render, screen} from '@testing-library/react';
import SortingList from './sorting-list';
import '@testing-library/jest-dom/extend-expect';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import { SortType } from '../../const';

describe('Component: SortingList', () => {
  const history = createMemoryHistory();

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SortingList currentSortType={SortType.Popular} changeSortType={() => null} />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Price: high to low/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('sorting-item').length).toBe(Array.from(Object.values(SortType)).length);
  });
});
