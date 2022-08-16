import {fireEvent, render, screen} from '@testing-library/react';
import SortingItem from './sorting-item';
import '@testing-library/jest-dom/extend-expect';
import { SortType } from '../../const';

describe('Component: SortingItem', () => {

  it('should render correctly', () => {

    const mockCallback = jest.fn((sortType) => sortType);

    render(
      <SortingItem
        currentSortType={SortType.Popular}
        sortType={SortType.Popular}
        changeSortType={(sortType) => mockCallback(sortType)}
        setSortListVisibility={(value: boolean) => null}
      />
    );
    expect(screen.getByText(/Popular/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('sorting-item'));
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe('Popular');
  });
});
