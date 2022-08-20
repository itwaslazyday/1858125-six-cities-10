import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-router/history-router';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';
import '@testing-library/jest-dom/extend-expect';
import { makeFakeOfferProcess, makeFakeOffersProcess } from '../../utiles/mocks';
import { Place } from '../../types/types';
import {State} from '../../types/state';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { createAPI } from '../../services/api';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const mockOffers = makeFakeOffersProcess();
const mockOffer = makeFakeOfferProcess().room as Place;
mockOffer.city.name = 'Paris';
const id = mockOffer.id;

const store = mockStore({
  USER:
  {
    authorizationStatus: AuthorizationStatus.Auth,
    userInfo: null
  },
  OFFERS:
  {
    city: 'Paris',
    offers: [...mockOffers, mockOffer],
    isDataLoaded: true,
    favoriteOffers: mockOffers
  },
  OFFER:
  {
    room: mockOffer,
    comments: [],
    nearby: []
  },
  ERROR:
  {
    authError: false,
    offerDataError: false,
    offerCommentsError: false,
    offerNearbyError: false
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render main page when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
  });

  it('should render login page when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render favorites page when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render property page when user navigate to "/Offer"', () => {
    history.push(`/offer/${id}`);

    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Back to main')).toBeInTheDocument();
  });
});
