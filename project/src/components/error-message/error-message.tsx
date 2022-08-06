import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import './error-message.css';
import {getAuthError} from '../../store/errors-process/selectors';

function ErrorMessage(): JSX.Element | null {
  const authError = useAppSelector(getAuthError);

  // return (authError)
  //   ? <div className='error-message'>{authError}</div>
  //   : null;

  return (authError)
    ? <div className='error-message'></div>
    : null;

}

export default ErrorMessage;
