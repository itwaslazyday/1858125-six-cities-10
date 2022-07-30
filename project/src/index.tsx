import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import ErrorMessage from './components/error-message/error-message';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store = {store}>
    {/* <ErrorMessage /> */}
    <App/>
  </Provider>
);
