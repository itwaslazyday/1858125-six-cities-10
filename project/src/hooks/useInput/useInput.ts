import {useState, ChangeEvent} from 'react';
import useValidateForm from '../useValidateForm/useValidateForm';

function useInput (initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const validity = useValidateForm(value);
  const [isDirty, setDirty] = useState(false);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const onBlur = (evt: ChangeEvent<HTMLInputElement>) => {
    setDirty(true);
  };

  return {value, onChange, onBlur, ...validity, isDirty};
}

export default useInput;
