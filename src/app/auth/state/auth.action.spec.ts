import { Action, createAction } from '@ngrx/store';
import { from } from 'rxjs';
import { AuthResponseData } from 'src/app/models/AuthResponseData.model';
import * as Actions from './auth.actions';
import { User } from './../../models/user.model';
import { initialState } from './auth.state';
import { loginStart, loginSuccess, loginFail } from './auth.actions';

describe('Auth Actions', () => {
  describe('authStart', () => {
    it('should create an action loginstart', () => {
      const action = Actions.loginStart({ email: '', password: '' });
      expect(action.type).toEqual('[auth page] login start');
    });
  });

  describe('login successful', () => {
    it('should create an action loginsuccess', () => {
      const fakeResponse = {
        user: Array(2).fill({
          email: 'test@test.com',
          password: 123456,
        }),
      };
      const action = new loginSuccess(fakeResponse);
  
      const result = User.reducer(initialState, action);
  
      expect(result).toEqual({
        ...initialState,
        products: [...fakeResponse.user],
        loading: true,
      });
    });
  });

  describe('login fail', () => {
    it('should login fail', () => {
      const fakeResponse = { message: 'Failed to login' };
      const action = loginFail({user: User: email, redirect: boolean });
  
      const result = User.reducer(initialState, action);
  
      expect(result).toEqual({
        ...initialState,
      error: fakeResponse.message,
        loading: false,
      });
    });
  });
});
