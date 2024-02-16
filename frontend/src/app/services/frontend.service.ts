import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  agregarProducto(nuevoProducto: Product) {
    throw new Error('Method not implemented.');
  }
  addProduct(newProduct: Product) {
    throw new Error('Method not implemented.');
  }

  private myAppUrl = 'https://localhost:44309/'
  private myApiUrl = 'api/backend/'

  constructor(private http: HttpClient) { }

  getListProduct(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  getProduct(id: number){
    return this.http.get(this.myAppUrl + this.myApiUrl + id)
  }

  saveProduct(product: Product): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, product);
  }

  updateProduct(id: number , product: Product): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, product);
  }
}
