import {useState, ChangeEvent} from 'react';
import useValidateForm from '../useValidateForm/useValidateForm';

type Validations = {
  isEmpty: boolean;
  reCheck: RegExp;
};

function useInput (initialValue: string, validations: Validations) {
  const [value, setValue] = useState(initialValue);
  const [name, setName] = useState(initialValue);
  const validity = useValidateForm(value, validations, name);
  const [isDirty, setDirty] = useState(false);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    setName(evt.target.name);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {value, onChange, onBlur, ...validity, isDirty};
}

export default useInput;
