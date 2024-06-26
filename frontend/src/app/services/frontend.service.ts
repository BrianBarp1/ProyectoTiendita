import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Product } from '../interfaces/product';
import { Client } from '../interfaces/client';
import { Orders } from '../interfaces/orders';

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

  private myAppUrl = 'https://localhost:44309/';
  private myApiUrl = 'api/backend/';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.myAppUrl + this.myApiUrl);
  }

  getListProduct(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  getProduct(id: number){
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }

  saveProduct(product: Product): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, product);
  }


  updateProduct(id: number , product: Product): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, product);
  }
}


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private myAppUrl = 'https://localhost:44309/';
  private myApiUrl = 'api/client/';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los clientes
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.myAppUrl + this.myApiUrl);
  }

    getListClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(this.myAppUrl + this.myApiUrl + id);
  }

  saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.myAppUrl + this.myApiUrl, client);
  }

  updateClient(id: number , client: Client): Observable<Client> {
    return this.http.put<Client>(this.myAppUrl + this.myApiUrl + id, client);
  }
}


@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private myAppUrl = 'https://localhost:44309/';
  private myApiUrl = 'api/Orders';

  constructor(private http: HttpClient) { }

  getListOrder(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.myAppUrl + this.myApiUrl);
  }

  saveOrder(order: Orders): Observable<Orders> {
    return this.http.post<Orders>(this.myAppUrl + this.myApiUrl, order);
  }

  updateOrder(id: number, order: Orders): Observable<Orders> {
    return this.http.put<Orders>(this.myAppUrl + this.myApiUrl + id, order);
  }
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private myAppUrl = 'https://localhost:44309/';
  private myApiUrl = 'api/Orders';

  constructor(private http: HttpClient) { }

  getListOrder(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  saveOrder(order: Orders): Observable<Orders> {
    return this.http.post<Orders>(`${this.myAppUrl}${this.myApiUrl}`, order);
  }

  pdateOrder(id: number, order: Orders): Observable<Orders> {
    return this.http.put<Orders>(`${this.myAppUrl}${this.myApiUrl}/${id}`, order);
  }

  saveOrderModal(orderDetails: any): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}api/ModalList`, orderDetails);
  }  

  updateOrder(id: number, order: Orders): Observable<Orders> {
    return this.http.put<Orders>(`${this.myAppUrl}${this.myApiUrl}/${id}`, order);
  }
}

