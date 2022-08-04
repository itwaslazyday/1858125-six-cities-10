import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const {errors} = useAppSelector((state) => state);

  return (errors.authError)
    ? <div className='error-message'>{errors.authError}</div>
    : null;

}

export default ErrorMessage;
