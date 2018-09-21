import { Injectable } from '@angular/core';
import {AngularTokenService} from 'angular-token';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer';

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
