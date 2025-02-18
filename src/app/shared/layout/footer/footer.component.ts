import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'footer-component',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public cartService: CartService){

  }
}
