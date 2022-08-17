import SortingItem from '../sorting-item/sorting-item';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {memo, useEffect, useState} from 'react';
import {SortType} from '../../const';
import {getCity} from '../../store/offers-process/selectors';


type SortingListProps = {
  changeSortType: (sortType: string) => void;
  currentSortType: string;
};

function SortingList({changeSortType, currentSortType}: SortingListProps): JSX.Element {
  const [isSortListVisible, setSortListVisibility] = useState<boolean>(false);

  const tappedCity = useAppSelector(getCity);
  const [currentCity, setCurrentCity] = useState<string>(tappedCity);

  useEffect(() => {
    if (currentCity !== tappedCity) {
      setCurrentCity(tappedCity);
      setSortListVisibility(false);
      changeSortType(SortType.Popular);
    }
  }, [changeSortType, currentCity, tappedCity]);

  return (
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortListVisibility(!isSortListVisible)}
        data-testid='sorting-type'
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        data-testid='sorting-list'
        className={`places__options places__options--custom ${isSortListVisible ? 'places__options--opened' : ''}`}
      >
        {Array.from(Object.values(SortType)).map((item) => <SortingItem key={item} currentSortType={currentSortType} sortType={item} changeSortType={changeSortType} setSortListVisibility={setSortListVisibility}/>)}
      </ul>
    </div>
  );
}

export default memo(SortingList);
