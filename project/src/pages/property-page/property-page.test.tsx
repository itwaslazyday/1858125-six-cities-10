import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import PropertyPage from './property-page';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { Route, Routes } from 'react-router-dom';
import { makeFakeOfferProcess } from '../../utiles/mocks';
import { Place} from '../../types/types';
import { createAPI } from '../../services/api';
import { AuthorizationStatus } from '../../const';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from '@reduxjs/toolkit';

describe('Component: PropertyPage', () => {
  it('should render correctly & route to login page', async () => {
    const history = createMemoryHistory();
    const mockOffer = makeFakeOfferProcess().room as Place;
    mockOffer.city.name = 'Paris';
    const id = mockOffer.id;
    const api = createAPI();
    const middlewares = [thunk.withExtraArgument(api)];

    const mockStore = configureMockStore<
        State,
        Action,
        ThunkDispatch<State, typeof api, Action>
      >(middlewares);

    const store = mockStore({
      OFFERS: {favoriteOffers: []},
      OFFER: {room: mockOffer},
      ERROR: {offerDataError: false},
      USER: {authorizationStatus: AuthorizationStatus.NoAuth}});

    history.push(`/offer/${id}`);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/login"
              element={<h1>This is login page</h1>}
            />
            <Route
              path='/offer/:id'
              element={<PropertyPage />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('bookmark-button'));
    expect(screen.getByText(/This is login page/i)).toBeInTheDocument();
  });
});

