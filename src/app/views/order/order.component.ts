import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../shared/services/cart.service';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  };

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  ngOnInit(): void {
    // if(this.cartService.product){
    //   this.formValues.productTitle = this.cartService.product;
    // }

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        if (params['product']) {
          this.formValues.productTitle = params['product'];
        }
      }
    );


    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    // if(productParam){
    //   this.formValues.productTitle = productParam;
    // }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }


  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone,
    }).subscribe(response => {
        if(response.success && !response.message){
          alert('Заказ принят!');

          this.formValues = {
            productTitle: '',
            address: '',
            phone: '',
          };
        } else {
          alert('Crash!')
        }
    })

    
  }
}
