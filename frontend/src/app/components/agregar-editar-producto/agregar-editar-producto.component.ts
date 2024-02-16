import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/frontend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-agregar-editar-producto',
  templateUrl: './agregar-editar-producto.component.html',
  styleUrl: './agregar-editar-producto.component.css'
})
export class AgregarEditarProductoComponent {
  agregarProducto: FormGroup;
  accion = 'Agregar';
  id = 0;
  product: Product | undefined;

  constructor(private fb: FormBuilder,
              private _productService: ProductService,
              private router: Router,
              private aRoute: ActivatedRoute){
    this.agregarProducto = this.fb.group({
      nombre: ['', Validators.required],
      creador: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      fechaCreacion: ['', Validators.required]
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void{
    this.esEditar();
  }

  esEditar() {
    if (this.id !== 0) {
      this.accion = 'Editar';
      this._productService.getProduct(this.id).subscribe((data: any) => {
        console.log(data);
        this.product = data;
        this.agregarProducto.patchValue({
          id: data.id,
          nombre: data.nombre,
          descripcion: data.descripcion,
          creador: data.creador,
          stock: data.stock,
          fechaCreacion: data.fechaCreacion
        });
      }, error => {
        console.log(error);
      });
    }
  }

  agregarEditarProduct(){

    if(this.product == undefined){

      //añadimos un producto
      const frontend: Product = {
        id: this.agregarProducto.get('id')?.value,
        nombre: this.agregarProducto.get('nombre')?.value,
        creador: this.agregarProducto.get('creador')?.value,
        descripcion: this.agregarProducto.get('descripcion')?.value,
        precio: this.agregarProducto.get('precio')?.value,
        stock: this.agregarProducto.get('stock')?.value,
        fechaCreacion: this.agregarProducto.get('fechaCreacion')?.value
      }
      this._productService.saveProduct(frontend).subscribe(data =>{
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })
      console.log(frontend);
    } else{
      //editamos el producto
      const frontend: Product = {
        id: this.product.id,
        nombre: this.agregarProducto.get('nombre')?.value,
        creador: this.agregarProducto.get('creador')?.value,
        descripcion: this.agregarProducto.get('descripcion')?.value,
        precio: this.agregarProducto.get('precio')?.value,
        stock: this.agregarProducto.get('stock')?.value,
        fechaCreacion: this.agregarProducto.get('fechaCreacion')?.value
      }

      this._productService.updateProduct(this.id, this.product).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })
    }
    
    
  }
}
