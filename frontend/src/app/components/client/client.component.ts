import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';
import { ClientService } from '../../services/frontend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  id = 0;
  client: Client = {} as Client; // Inicializa client como un objeto vacío
  indiceClienteEditado: number = -1;
  editDate: string = "";

  listClients: Client[] = [];

  constructor(private fb: FormBuilder,
              private clientService: ClientService, // Cambia el nombre de la variable de ClientService a clientService
              private router: Router,
              private aRoute: ActivatedRoute,
              private _cliserv: ClientService) {
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this._cliserv.getListClient().subscribe(
      (data: Client[]) => { // Especifica el tipo de datos para 'data'
        console.log(data);
        this.listClients = data;
      },
      (error: any) => { // Especifica el tipo de datos para 'error'
        console.log(error);
      }
    );
  }
  
  editarClient(id: any) {
    this.clientService.getClient(id).subscribe(
      (data: Client) => { // Especifica el tipo de datos para 'data'
        this.client = data;
      },
      (error: any) => { // Especifica el tipo de datos para 'error'
        console.log(error);
      }
    );
  }
  

  agregarCliente() {
    console.log(this.client);
    this.clientService.saveClient(this.client).subscribe(
      (data: Client) => { // Especifica el tipo de datos para 'data'
        this.getClients();
        console.log('Cliente guardado con éxito', data);
        this.client = {} as Client; // Reinicializa client como un objeto vacío
      },
      (error: any) => { // Especifica el tipo de datos para 'error'
        console.error('Error al guardar el cliente', error);
      }
    );
  }
  

  editarCliente() {
    // Convierte la cadena de texto a un objeto Date
    this.clientService.updateClient(this.client.id, this.client).subscribe(
      (data: Client) => { // Especifica el tipo de datos para 'data'
        this.getClients();
        console.log('Cliente editado con éxito', data);
        this.client = {} as Client; // Reinicializa client como un objeto vacío
      },
      (error: any) => { // Especifica el tipo de datos para 'error'
        console.error('Error al editar el cliente', error);
      }
    );
  }
  


  guardarCambiosCliente() {
    const index = this.listClients.findIndex(item => item.id === this.client.id);
    if (index !== -1) {
      this.listClients[index] = { ...this.client };
    }
  }

  eliminarClientes(id: any) {
    console.log(id);
    this._cliserv.deleteClient(id).subscribe(
      () => { // No es necesario manejar los datos en este caso
        this.getClients();
      },
      (error: any) => { // Especifica el tipo de datos para 'error'
        console.log(error);
      }
    );
  }
  
}
