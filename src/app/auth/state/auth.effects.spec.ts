import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { from, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { AuthEffects } from './auth.effects';
import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user.model';
import { AuthReducer } from './auth.reducer';

import { loginStart, loginSuccess, loginFail } from './auth.actions';

describe('AuthEffect', () => {
  let actions$: Observable<Action>;
  let service: AuthService;
  let effects: AuthEffects;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, AuthEffects, provideMockActions(() => actions$)],
    }).compileComponents();

    effects = TestBed.inject(AuthEffects);
    service = TestBed.inject(AuthService);
  }));

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should login sucess', () => {
    const data = [
      {
        email: 'test@test.com',
        token: '222222222',
        localId: '2222',
        expirationDate: '20-12-2022',
      },
    ];
    spyOn(service, 'login').and.returnValue(cold('-a|', { a: data }));
    actions$ = hot('-a-', { a: loginStart({ email: '', password: '' }) });
    //expect(effects.login$).toBeObservable(cold('--c', {c: loginSuccess({user: data})}));
  });

  it('should fail to login', () => {
    spyOn(service, 'login').and.returnValue(cold('-#'));
    actions$ = hot('-a-', { a: loginStart({ email: '', password: '' }) });
    //expect(effects.login$).toBeObservable(cold('--c', {c: loginFail()}));
  });
});
