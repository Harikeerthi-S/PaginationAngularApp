import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(limit:number, skip:number): Observable<ProductResponse> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('skip', skip)
      .set('select', 'title,price');

    return this.http.get<ProductResponse>(this.api, { params });
  }
}