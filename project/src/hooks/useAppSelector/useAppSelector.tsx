import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type {State} from '../../types/state';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export {useAppSelector};
