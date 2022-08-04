const TIMEOUT_SHOW_ERROR = 4000;

enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer/:id',
  Main = '/',
  NotFound = '*'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export {AppRoute, AuthorizationStatus, SortType, APIRoute, TIMEOUT_SHOW_ERROR};
