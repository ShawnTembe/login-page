import { AuthReducer } from './auth.reducer';
import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFail } from './auth.actions';
import { User } from './../../models/user.model';
import { Data } from '@angular/router';
import { initialState } from './auth.state';
import { AuthService } from './../../services/auth.service';
import { state } from '@angular/animations';
import {AuthResponseData} from './../../models/AuthResponseData.model';

describe('Auth Reducer', () => {
    it(' success loginStart', () => {
      const user = [{ email: 'test@test.com', token: '222222222', localId: '2222', expirationDate: '20-12-2022'}];
      const newState = AuthReducer(undefined, loginSuccess);
      expect(newState.user).toEqual(undefined, {user: user});
    });
  });
