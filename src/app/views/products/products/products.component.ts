import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ProductType } from '../../../../types/product.type';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(
    private productService: ProductService,
    private router: Router,
    private http: HttpClient
  ) {}
  public products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    // this.products = this.productService.getProducts();
    this.loading = true;
    this.productService
      .getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        },
      });
  }
}
