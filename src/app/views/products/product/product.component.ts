import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductType } from '../../../../types/product.type';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;
  product: ProductType;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: '',
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        const product = this.productService
          .getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              this.router.navigate(['/']);
            },
          });
      }
    });
  }
}
