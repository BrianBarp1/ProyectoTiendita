import { Component } from '@angular/core';
import { frontend } from '../../interfaces/frontend';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-list-products',
  // imports: [],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: frontend[] = [
    {
      id: 1,  // Cambia '' por un valor numérico
      titulo: 'Angular',
      creador: 'Brian',
      fechaCreacion: new Date(),
      descripcion: 'Probando angular'
    }
  ]

  constructor (){}

  ngOnInit(): void {
    
  }
}

