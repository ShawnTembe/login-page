import { AuthReducer } from './auth.reducer';
import * as createAction from './auth.actions';
import { } from './auth.actions';
import { loginSuccess } from './auth.actions';
import { User } from './../../models/user.model';
import { Data } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { initialState } from './auth.state';

describe('undefined action', () => {
  it('should return the default state', () => {
    const action = { type: 'NOOP' } as any;
    const result = AuthReducer(undefined, action);

    expect(result).toBe(initialState);
  });
});