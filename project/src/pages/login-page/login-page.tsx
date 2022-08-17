import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {cities} from '../../const';
import { changeCity } from '../../store/offers-process/offers-process';
import {getRandomInteger} from '../../utiles/utiles';
import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const randomCity = cities[getRandomInteger(0, 5)].name;

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link" to="/"
                onClick={() => {dispatch(changeCity(randomCity));}}
                data-testid='random-city'
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
