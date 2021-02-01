import { Action, createAction } from '@ngrx/store';
import { from } from 'rxjs';
import { AuthResponseData } from 'src/app/models/AuthResponseData.model';
import * as Actions from './auth.actions';
import { User } from './../../models/user.model';

describe('Auth Actions', () => {
  describe('authStart', () => {
    it('should create an action', () => {
      const action = Actions.loginStart({ email: '', password: '' });
      expect(action.type).toEqual('[LOGIN_START] loginStart');
    });
  });

  describe('login successful', () => {
    it('should create an action', () => {
     const action = Actions.loginStart({ email: '', password: '' });
      expect(action.type).toEqual('[LOGIN_SUCCESS] loginSuccess');
    });
  });

  describe('login failed', () => {
    it('should create an action', () => {
      const action = Actions.loginStart({ email: '', password: '' });
      expect(action.type).toEqual('[LOGIN_FAIL] loginFail');
    });
  });
});