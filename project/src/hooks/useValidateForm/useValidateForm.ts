import {useState, useEffect} from 'react';

type Validations = {
  isEmpty: boolean;
  reCheck: RegExp;
};

function useValidateForm (value: string, validations: Validations, name: string) {
  const [isEmpty, setEmpty] = useState(true);
  const [isError, setInputError] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect (() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          if (value) {setEmpty(false);} else {setEmpty(true); setErrorText('Поле не может быть пустым');}
          break;

        case 'reCheck':
          if (value) {
            if (validations[validation].test(value)) {
              setInputError(false);
            } else {
              setInputError(true);
              name === 'email' ? setErrorText('Введите корректный адрес e-mail') : setErrorText('Пароль должен содержать не менее одной буквы и цифры, и не быть короче двух символов');
            }
          }
          break;
      }
    }
  }, [name, validations, value]);

  return {isEmpty, isError, errorText};
}
export default useValidateForm;
