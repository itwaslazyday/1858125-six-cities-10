import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PropertyPage from '../../pages/property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {Place} from '../../types/types';

function App(): JSX.Element {
  const {user} = useAppSelector((state) => state);
  const {offers} = useAppSelector((state) => state);

  if (!offers.isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={user.authorizationStatus}>
                <FavoritesPage places={offers.offers.filter((offer: Place) => offer.isFavorite)}/>
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
    </BrowserRouter>
  );
}

export default App;
