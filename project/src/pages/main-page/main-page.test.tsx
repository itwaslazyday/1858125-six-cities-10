import MainPage from './main-page';
import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { Route, Routes } from 'react-router-dom';
import { makeFakeOffersProcess } from '../../utiles/mocks';
import { createAPI } from '../../services/api';
import { AuthorizationStatus } from '../../const';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from '@reduxjs/toolkit';

describe('Component: MainPage', () => {

  it('should render main & route to login page', () => {
    const history = createMemoryHistory();
    const mockOffers = makeFakeOffersProcess().map((offer) => ({...offer, city: {...offer.city, name: 'Paris'}}));
    const api = createAPI();
    const middlewares = [thunk.withExtraArgument(api)];

    const mockStore = configureMockStore<
        State,
        Action,
        ThunkDispatch<State, typeof api, Action>
      >(middlewares);

    const store = mockStore({
      OFFERS: {favoriteOffers: [], offers: mockOffers, city: 'Paris'},
      USER: {authorizationStatus: AuthorizationStatus.NoAuth}
    });

    history.push('/');
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/login"
              element={<h1>This is login page</h1>}
            />
            <Route
              path='/'
              element={<MainPage />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('place-card').length).toBe(mockOffers.length);

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText(/This is login page/i)).toBeInTheDocument();
  });
});
