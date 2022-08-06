import {createAction} from '@reduxjs/toolkit';

const setAuthError = createAction('app/setAuthError', (error: string | null) => ({payload: error}));

export {setAuthError};
