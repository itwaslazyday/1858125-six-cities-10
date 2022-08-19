import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import FavoritesPage from './favorites-page';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { createAPI } from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';

describe('Component: FavoritesPage', () => {
  it('should render correctly & route to login page', async () => {
    const history = createMemoryHistory();
    const api = createAPI();
    const middlewares = [thunk.withExtraArgument(api)];

    const mockStore = configureMockStore<
        State,
        Action,
        ThunkDispatch<State, typeof api, Action>
      >(middlewares);

    const store = mockStore({
      OFFERS: {favoriteOffers: []},
      USER: {authorizationStatus: AuthorizationStatus.NoAuth}});

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesPage />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });
});

