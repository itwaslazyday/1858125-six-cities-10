import SortingItem from '../sorting-item/sorting-item';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {useState} from 'react';
import {SortType} from '../../const';

type SortingListProps = {
  changeSortType: (sortType: string) => void;
};

function SortingList({changeSortType}: SortingListProps): JSX.Element {
  const sortState = useAppSelector((state) => (state.sortType));
  const [sort, setSort] = useState<boolean>(false);

  return (
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSort(!sort)}>
        {sortState}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sort ? 'places__options--opened' : ''}`}>
        {Array.from(Object.values(SortType)).map((item) => <SortingItem key={item} sortState={sortState} sortType={item} changeSortType={changeSortType} />)}
      </ul>
    </div>
  );
}

export default SortingList;
