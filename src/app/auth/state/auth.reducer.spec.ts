import { AuthReducer } from './auth.reducer';
import * as _authReducer from './auth.reducer';
import { } from './auth.actions';

import { User } from './../../models/user.model';
import { Data } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = AuthReducer(undefined, action);

    });
  });

  describe('LOGIN_SUCCESS', () => {
    it('should add a user set loginSuccess to true in auth state', () => {
      const data = { email: 'test@test.com', password:'' } as Data;
      const createAction = AuthService.loginSuccess({ User });

      const result = AuthReducer(_authReducer, createAction);
    });
  });
});