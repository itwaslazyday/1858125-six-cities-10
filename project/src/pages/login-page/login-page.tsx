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

  const email = useInput('');
  const password = useInput('');

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email.value && password.value) {
      if (!(email.isEmailError && password.isPasswordError)) {
        onSubmit({
          login: email.value,
          password: password.value,
        });
        navigate(AppRoute.Main);
      }
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
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={email.onChange} onBlur={email.onBlur} value={email.value} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              {(email.isDirty && email.isEmailError) && <p style={{margin: '0, 0, 15px, 0', color: 'red'}}>{email.emailErrorText}</p>}
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={password.onChange} onBlur={password.onBlur} value={password.value} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              {(password.isDirty && password.isPasswordError) && <p style={{margin: '0, 0, 15px, 0', color: 'red'}}>{password.passwordErrorText}</p>}
              <button className="login__submit form__submit button" type="submit">Sign in</button>
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
