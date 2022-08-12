import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchOffersAction, fetchFavoritesAction} from './store/api-actions';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';

store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoritesAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store = {store}>
    <HistoryRouter history={browserHistory}>
      <App/>
    </HistoryRouter>
  </Provider>
);
