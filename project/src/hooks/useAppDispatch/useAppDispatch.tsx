import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../../types/state';

const useAppDispatch = () => useDispatch<AppDispatch>();

export {useAppDispatch};
