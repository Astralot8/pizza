import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../../core/auth/auth.service';


@Component({
  selector: 'header-component',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent implements OnInit {
  loggedState: boolean = false;
  constructor(
    public cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.loggedState = isLoggedIn;

      console.log('State has been changed: ' + isLoggedIn);
    });
  }

  login() {
    this.authService.logIn();
  }

  logout() {
    this.authService.logOut();
  }
}
