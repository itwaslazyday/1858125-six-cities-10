import {renderHook, render, screen} from '@testing-library/react';
import useValidateForm from '../useValidateForm/useValidateForm';
import '@testing-library/jest-dom/extend-expect';

describe('Hook: useValidateForm', () => {

  const reExp = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

  it('should return array with 3 elements', () => {

    const {result} = renderHook(() =>
      useValidateForm('123', {isEmpty: true, reCheck: reExp}, 'email'),
    );

    const {errorText} = result.current;

    render (
      <p>{errorText}</p>
    );

    expect(Object.values(result.current)).toHaveLength(3);
    expect(screen.getByText(/Введите корректный адрес e-mail/i)).toBeInTheDocument();

  });

  it('should be correctly change state', () => {

    const {result} = renderHook(
      () => useValidateForm('123', {isEmpty: true, reCheck: reExp}, 'password'),
    );

    const {isError} = result.current;

    expect(isError).toBeTruthy();
  });
});

