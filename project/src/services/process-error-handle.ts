import {store} from '../store';
import {setAuthError} from '../store/action';
import {clearErrorAction} from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setAuthError(message));
  store.dispatch(clearErrorAction());
};
