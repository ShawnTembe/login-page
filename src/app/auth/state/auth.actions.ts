import { User } from './../../models/user.model';
import { createAction, props } from '@ngrx/store';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const loginFail = createAction(
  LOGIN_FAIL,
  props<{ user: User; redirect: boolean }>()
);



