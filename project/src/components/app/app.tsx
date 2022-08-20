import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PropertyPage from '../../pages/property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {getDataLoadedStatus} from '../../store/offers-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import { getOffersDataError } from '../../store/errors-process/selectors';
import ServerErrorScreen from '../../pages/server-error-screen/server-error-screen';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);
  const offersDataError = useAppSelector(getOffersDataError);

  if (offersDataError) {
    return (<ServerErrorScreen />);
  } else if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={<PropertyPage/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
