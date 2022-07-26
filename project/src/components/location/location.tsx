import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {changeCity} from '../../store/action';

type LocationProps = {
  name: string;
}

function Location({name}: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();
  const tappedCity = useAppSelector((state) => (state.city));

  return (
    <li className="locations__item" onClick={() => {
      dispatch(changeCity(name));}}
    >
      <Link to={'/'}>
        <p className={`locations__item-link tabs__item ${tappedCity === name ? 'tabs__item--active' : ''}`}>
          <span>{name}</span>
        </p>
      </Link>
    </li>
  );
}

export default Location;
