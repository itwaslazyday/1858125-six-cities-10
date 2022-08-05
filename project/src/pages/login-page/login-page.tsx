import Logo from '../../components/logo/logo';
import {FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import {AppRoute} from '../../const';
import useInput from '../../hooks/useInput/useInput';

function LoginPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useInput('', {isEmpty: true, reCheck: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm});
  const password = useInput('', {isEmpty: true, reCheck: /^(?=.*[A-Za-z])(?=.*[0-9]).{2,}$/});

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!(email.isError && password.isError)) {
      onSubmit({
        login: email.value,
        password: password.value,
      });
      navigate(AppRoute.Main);
    }
  };


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
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={email.onChange} onBlur={email.onBlur} value={email.value} className="login__input form__input" type="email" name="email" placeholder="Email"/>
              </div>
              {(email.isDirty && email.isError) && <p style={{margin: '-10px 0 10px', color: 'red'}}>{email.errorText}</p>}
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={password.onChange} onBlur={password.onBlur} value={password.value} className="login__input form__input" type="password" name="password" placeholder="Password"/>
              </div>
              {(password.isDirty && password.isError) && <p style={{margin: '-10px 0 10px', color: 'red'}}>{password.errorText}</p>}
              <button disabled={email.isError || password.isError} className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="\#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
