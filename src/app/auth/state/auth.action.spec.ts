import { Action, createAction } from '@ngrx/store';
import {loginStart, loginSuccess, loginFail} from './auth.actions';

describe('Auth Actions', () => {
  describe('authStart', () => {
    it('should create an action', () => {
      const action = createAction.loginStart();
      expect(action.login$).toBe(loginStart);
    });
  });

  describe('login successful', () => {
    it('should create an action', () => {
     const action = createAction.LOGIN_START({email: 'test@test.com',
     token: '222222222',
     localId: '2222',
     expirationDate: '20-12-2022',});
      expect(action.login$).toBe(loginSuccess);
    });
  });

  describe('login failed', () => {
    it('should create an action', () => {
      const action = createAction.loginFail({error: 'Login failed'});
      expect(action.login$).toBe(loginFail);
    });
  });
});