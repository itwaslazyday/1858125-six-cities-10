import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';


type HeaderProps = {
  headerFavoriteCount: number;
}

function SiteHeader({headerFavoriteCount}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {authorizationStatus, userInfo} = useAppSelector((state) => state);
  const authorization = (authorizationStatus === AuthorizationStatus.Auth);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={authorization ? AppRoute.Favorites : AppRoute.Login} className="header__nav-link header__nav-link--profile" >
                  <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${userInfo?.avatarUrl})`}}>
                  </div>
                  {authorization ?
                    <p style={{margin: 0}}>
                      <span className="header__user-name user__name">{userInfo?.email}</span>
                      <span className="header__favorite-count">{headerFavoriteCount}</span>
                    </p> :
                    <span className="header__user-name user__name">Sign in</span>}
                </Link>
              </li>
              {authorization &&
              <li className="header__nav-item">
                <a href="/" className="header__nav-link" onClick={() => dispatch(logoutAction())}>
                  <span className="header__signout">Sign out</span>
                </a>
              </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
