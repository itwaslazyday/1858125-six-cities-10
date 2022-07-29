type SortingItemProps = {
  sortState: string;
  sortType: string;
  changeSortType: (sortType: string) => void;
  setSortListVisibility: (state: boolean) => void;
};

function SortingItem({sortState, sortType, changeSortType, setSortListVisibility}: SortingItemProps): JSX.Element {
  return (
    <li className={`places__option ${sortState === sortType ? 'places__option--active' : ''}`}
      tabIndex={0} onClick={() => {
        changeSortType(sortType);
        setSortListVisibility(false);}}
    >
      {sortType}
    </li>
  );
}

export default SortingItem;
