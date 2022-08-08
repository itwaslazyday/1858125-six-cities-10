import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {AxiosResponse} from 'axios';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
const getUserInfo = (state: State): AxiosResponse['data'] | null => state[NameSpace.User].userInfo;

export {getAuthorizationStatus, getUserInfo};
