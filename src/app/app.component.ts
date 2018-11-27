import {Component, OnInit} from '@angular/core';
import {AuthenticationService, CartService} from './core/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'renting';

  constructor( private authService: AuthenticationService,
               private router: Router) {}

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    sessionStorage.removeItem('current-cart');
    this.router.navigate(['login']);
  }
}
