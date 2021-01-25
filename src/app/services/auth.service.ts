import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { AuthResponseData } from '../models/AuthResponseData.model';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(private http: HttpClient, private store: Store<AppState>) {}

    login(email: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
        { email, password, returnSecureToken: true }
        );
    }

    formatUser(data: AuthResponseData) {
        const expirationDate = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        const user = new User(
          data.email,
          data.idToken,
          data.localId,
          expirationDate
        );
        return user;
      }
}