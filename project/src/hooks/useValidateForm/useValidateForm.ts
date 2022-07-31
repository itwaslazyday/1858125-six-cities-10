import {useState, useEffect} from 'react';

type Validations = {
  isEmpty: boolean;
  email: RegExp;
  password: RegExp;
};

const validations: Validations = {
  isEmpty: true,
  email: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm,
  password: /^(?=.*[A-Za-z])(?=.*[0-9]).{3,}$/
};

function useValidateForm (value: string) {
  const [isEmpty, setEmpty] = useState(true);
  const [isEmailError, setEmailError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');

  useEffect (() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;

        case 'email':
          if (validations[validation].test(value)) {
            setEmailError(false);} else {setEmailError(true); setEmailErrorText('Введен некорректный e-mail');}
          break;

        case 'password':
          if (validations[validation].test(value)) {
            setPasswordError(false);} else {setPasswordError(true); setPasswordErrorText('Пароль должен содержать не менее одной буквы и цифры, и не быть короче трех символов');}
          break;
      }
    }
  }, [value]);


  return {isEmpty, isEmailError, isPasswordError, emailErrorText, passwordErrorText};
}
export default useValidateForm;
