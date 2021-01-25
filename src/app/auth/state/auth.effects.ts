import { loginStart, loginSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import {setLoadingSpinner } from './../../store/Shared/shared.actions';

@Injectable()
export class AuthEffects {
    constructor(
        private action$: Actions, 
        private authService: AuthService, 
        private store: Store <AppState>
        ) {}

    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const user = this.authService.formatUser(data);
                        return loginSuccess({ user, redirect: true });
                    })
                );
            })
        );
    });
}