import {render, screen} from '@testing-library/react';
import SortingItem from './sorting-item';
import '@testing-library/jest-dom/extend-expect';
import { SortType } from '../../const';
import userEvent from '@testing-library/user-event';

describe('Component: SortingItem', () => {

  it('should render correctly', () => {

    render(
      <SortingItem currentSortType={SortType.Popular} sortType={SortType.Popular}
        changeSortType={() => null} setSortListVisibility={() => null}
      />
    );
    expect(screen.getByText(/Popular/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId('sorting-item'));
  });
});
