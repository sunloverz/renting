import { Injectable } from '@angular/core';
import {AngularTokenService} from 'angular-token';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private tokenService: AngularTokenService) { }

  login(login, password) {
    return this.tokenService.signIn({
      login:    login,
      password: password
    });
  }
}
