import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/frontend.service';
import { Order } from '../../interfaces/orders';
import { ClientService } from '../../services/frontend.service'; // Importa el servicio de cliente
import { ProductService } from '../../services/frontend.service'; // Importa el servicio de producto
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  id: number | undefined;
  date: string = '';
  client: string = '';
  total: number | undefined;
  showModal: boolean = false;
  listOrders: Order[] = [];
  clients: any[] = []; // Lista de clientes
  products: any[] = []; // Lista de productos
  dropdownOpen: boolean = false; // Estado del desplegable

  order!: Order;

  constructor(
    private orderService: OrderService,
    private clientService: ClientService, // Servicio de cliente
    private productService: ProductService, // Servicio de producto
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getOrders();
    this.getClients(); // Obtener lista de clientes al inicializar el componente
    this.getProducts(); // Obtener lista de productos al inicializar el componente
    this.listenToChanges();
  }

  getOrders() {
    // Tu lógica para obtener las órdenes
  }

  getClients() {
    // Tu lógica para obtener los clientes
  }

  getProducts() {
    // Tu lógica para obtener los productos
  }

  listenToChanges() {
    // Tu lógica para escuchar cambios
  }

  guardarOrden() {
    // Tu lógica para guardar la orden
  }

  onSubmit() {
    // Tu lógica para el envío del formulario
  }

  openOrderModal() {
    this.showModal = true;
  }

  clearFields() {
    this.id = undefined;
    this.date = '';
    this.client = '';
    this.total = undefined;
  }

  // Método para alternar el estado del desplegable
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
