type SortingItemProps = {
  currentSortType: string;
  sortType: string;
  changeSortType: (sortType: string) => void;
  setSortListVisibility: (state: boolean) => void;
};

function SortingItem({currentSortType, sortType, changeSortType, setSortListVisibility}: SortingItemProps): JSX.Element {
  return (
    <li
      className={`places__option ${currentSortType === sortType ? 'places__option--active' : ''}`}
      data-testid="sorting-item"
      tabIndex={0}
      onClick={() => {
        changeSortType(sortType);
        setSortListVisibility(false);}}
    >
      {sortType}
    </li>
  );
}

export default SortingItem;
