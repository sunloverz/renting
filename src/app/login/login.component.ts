import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  authenticationError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const form = this.loginForm.controls;
    this.authService.login(form.email.value, form.password.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['customers']);
      },
      error => {
        this.authenticationError = true;
        console.log('Error occurred');
      });
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.authService.logout();
  }
}



