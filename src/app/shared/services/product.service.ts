import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../../../types/product.type';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
  
export class ProductService {
  constructor(private http: HttpClient) {}

  private products: ProductType[] = [];

  getProducts(): Observable<ProductType[]> {
    // let params = new HttpParams();
    // params = params.set('extraField', 1)
    // return this.http
    //   .get<{ data: ProductType[] }>('https://testologia.ru/pizzas', {
    //     observe: 'response',
    //     headers: new HttpHeaders({
    //       Authorization: 'auth-token'
    //     }),
    //     params: params,
    //   })
    //   .pipe(
    //     tap(result => {
    //       console.log(result)
    //     }),
    //     map((result) => {
    //       return result.body!.data;
    //     })
    //   );

    return this.http.get<ProductType[] >(environment.apiURL + '/pizzas');
  }

  getProduct(id: number): Observable<ProductType>{
    return this.http.get<ProductType>(environment.apiURL + `pizzas?id=${id}`);
  }

  createOrder(data: {product: string, address: string, phone: string}){
    return this.http.post<{success: boolean, message?: string}>(environment.apiURL + `/order-pizza`, data);
  }
}
