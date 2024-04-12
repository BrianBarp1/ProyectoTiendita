import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/frontend.service';
import { Orders } from '../../interfaces/orders';
import { ClientService } from '../../services/frontend.service';
import { ProductService } from '../../services/frontend.service';
import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  id: number = 0;
  date: string = '';
  client: string = '';
  showModal: boolean = false;
  listOrders: Orders[] = [];
  clients: any[] = [];
  products: any[] = [];
  dropdownOpen: boolean = false;
  selectedProduct: any;
  showAdditionalContent: boolean = false;
  productQuantity: number = 1;
  mostrarLista: boolean = false; // Variable para controlar la visibilidad de la lista en el modal
  total = 0;
  addedProductsList: any[] = [];
  selectedClientOrders: Orders[] = [];

  constructor(
    private orderService: OrderService,
    private clientService: ClientService,
    private productService: ProductService,
    private sharedService: SharedService,
  ) {}

  ngOnInit(): void {
    this.getClients();
    this.getProducts();
    this.getOrders();
    this.listenToChanges();
  }

  getOrders() {
    this.orderService.getListOrder().subscribe(
      (data: Orders[]) => {
        this.listOrders = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getClients() {
    this.clientService.getAllClients().subscribe(
      (data: any[]) => {
        this.clients = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  listenToChanges() {
    this.sharedService.clientes$.subscribe(
      (clientes: any[]) => {
        this.clients = clientes;
      }
    );
  }

  guardarOrden() {
    if (!this.client || !this.date) {
      console.log('Por favor, complete todos los campos antes de guardar la orden.');
      return;
    }
  
    const newOrder: Orders = {
      id: 0,
      date: new Date(this.date),
      client: this.client,
      total: this.calcularTotalProductos(), // Utiliza el método para calcular el total de productos
      product: this.addedProductsList // Asocia los productos añadidos con la orden
    };
    
  
    this.orderService.saveOrder(newOrder).subscribe(
      (response: Orders) => {
        console.log('Orden guardada con éxito:', response);
        this.listOrders.push(response);
        this.clearFields();
  
        // Filtrar órdenes por cliente seleccionado
        this.selectedClientOrders = this.listOrders.filter(order => order.client === this.client);
  
        // Recalcular el total por cada cliente después de agregar la orden
        this.calcularTotalPorCliente();
      },
      (error: any) => {
        console.error('Error al guardar la orden:', error);
      }
    );

    this.clearFields();
    
  }

  limpiarCampos() {
    this.client = ''; // Limpiar el campo del cliente
    this.date = ''; // Limpiar el campo de la fecha
    this.selectedProduct = null; // Limpiar el producto seleccionado
    this.productQuantity = 1; // Restaurar la cantidad a su valor predeterminado
    this.mostrarLista = false; // Ocultar la lista en el modal
    this.addedProductsList = []; // Limpiar la lista de productos añadidos
  }

  
  calcularTotalPorCliente() {
    // Recorre todas las órdenes y calcula el total para cada cliente
    this.clients.forEach(cliente => {
      const ordenesCliente = this.listOrders.filter(order => order.client === cliente.nombre);
      cliente.total = ordenesCliente.reduce((total, order) => total + order.total, 0);
    });
  }
  

  agregarOrdenModal() {
    console.log(this.selectedProduct, this.productQuantity);
    if (!this.selectedProduct || this.productQuantity <= 0) {
      console.log('Por favor seleccione un producto y especifique una cantidad valida.');
      return;
    }
  
    const orderDetails = {
      Producto: this.selectedProduct.id,
      Cantidad: this.productQuantity,
      Total: this.calculateTotal(),
    };
  
    this.orderService.saveOrderModal(orderDetails).subscribe(
      (response: any) => {
        console.log('Orden agregada exitosamente:', response);
        // Agregar el producto a la lista addedProductsList
        this.addedProductsList.push({
          Producto: this.selectedProduct.id,
          Cantidad: this.productQuantity,
          Total: this.calculateTotal()
        });
  
      },
      (error: any) => {
        console.error('Error al agregar la orden:', error);
      }
    );
  
    this.mostrarLista = true;
  }
  
  
  calculateTotal(): number {
    console.log(this.selectedProduct);
    return (this.selectedProduct?.precio || 0) * (this.productQuantity || 0);
  }

  clearFields() {
    this.id = 0;
    this.date = '';
    this.client = '';
    this.showModal = false;
    this.selectedProduct = null;
  }

  calcularTotalProductos(): number {
    let totalProductos = 0;
    for (let item of this.addedProductsList) {
      totalProductos += item.Total;
    }
    return totalProductos;
  }

  openOrderModal() {
    this.showModal = true;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  toggleAdditionalContent() {
    this.showAdditionalContent = !this.showAdditionalContent;
  }

  toggleLista(): void {
    this.mostrarLista = !this.mostrarLista;
  }
}
