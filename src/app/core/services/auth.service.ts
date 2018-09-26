import { Injectable } from '@angular/core';
import {AngularTokenService} from 'angular-token';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private tokenService: AngularTokenService) { }

  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return this.tokenService.userSignedIn();
  }

  login(login, password) {
    return this.tokenService.signIn({
      login:    login,
      password: password
    });
  }

  logout() {
    return this.tokenService.signOut().subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }

  register(account) {
    return this.tokenService.registerAccount({
      login: account.email,
      password: account.password,
      passwordConfirmation: account.password
    });
  }
}
