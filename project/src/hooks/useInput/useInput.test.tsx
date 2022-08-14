import {renderHook, fireEvent, render, screen} from '@testing-library/react';
import useInput from '../useInput/useInput';
import '@testing-library/jest-dom/extend-expect';

describe('Hook: useInput', () => {

  const reExp = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

  it('should return array with 7 elements', () => {

    const {result} = renderHook(() =>
      useInput('', {isEmpty: true, reCheck: reExp}),
    );

    const {onChange} = result.current;

    expect(Object.values(result.current)).toHaveLength(7);
    expect(onChange).toBeInstanceOf(Function);
  });

  it('should be correctly change state', () => {

    const {result} = renderHook(
      () => useInput('', {isEmpty: true, reCheck: reExp}),
    );

    const {onChange} = result.current;

    render (
      <input onChange={onChange} placeholder="Email" />
    );

    const node = screen.getByPlaceholderText('Email');
    fireEvent.change(node, { target: { value: 'abc' } });

    const {value} = result.current;

    expect(value).toBeTruthy();
  });
});

