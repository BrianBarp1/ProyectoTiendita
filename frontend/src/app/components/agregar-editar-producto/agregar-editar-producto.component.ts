import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { frontend } from '../../interfaces/frontend';

@Component({
  selector: 'app-agregar-editar-producto',
  templateUrl: './agregar-editar-producto.component.html',
  styleUrl: './agregar-editar-producto.component.css'
})
export class AgregarEditarProductoComponent {
  agregarProducto: FormGroup;

  constructor(private fb: FormBuilder){
    this.agregarProducto = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaCreacion: ['', Validators.required]
    })
  }

  agregar(){
    console.log(this.agregarProducto);

    const frontend: frontend = {
      id: this.agregarProducto.get('id')?.value,
      titulo: this.agregarProducto.get('titulo')?.value,
      creador: this.agregarProducto.get('creador')?.value,
      descripcion: this.agregarProducto.get('descripcion')?.value,
      fechaCreacion: this.agregarProducto.get('fecha')?.value
    }

    console.log(frontend);
  }

}
