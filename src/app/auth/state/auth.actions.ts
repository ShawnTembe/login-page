import { User } from './../../models/user.model';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
 LOGIN_START = '[auth page] login start',
 LOGIN_SUCCESS = '[auth page] login success',
 LOGIN_FAIL = '[auth page] login fail',
}

export const loginStart = createAction(ActionTypes.
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(ActionTypes.
  LOGIN_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const loginFail = createAction(ActionTypes.
  LOGIN_FAIL,
  props<{ user: User; redirect: boolean }>()
);



