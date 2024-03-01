import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private clientesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private productosSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public clientes$: Observable<string[]> = this.clientesSubject.asObservable();
  public productos$: Observable<string[]> = this.productosSubject.asObservable();

  constructor() {}

  updateClientes(clientes: string[]) {
    this.clientesSubject.next(clientes);
  }

  updateProductos(productos: string[]) {
    this.productosSubject.next(productos);
  }
}
