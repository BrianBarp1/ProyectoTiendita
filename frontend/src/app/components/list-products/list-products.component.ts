import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/frontend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { get } from 'jquery';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  id = 0;
  product: Product = new Product();
  indiceProductoEditado: number = -1;
  editDate: string= "";

  listProducts: Product[] = [];

  constructor(private fb: FormBuilder,
              private _productService: ProductService,
              private router: Router,
              private aRoute: ActivatedRoute,
              private _prodserv: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts() {
    this._prodserv.getListProduct().subscribe(data => {
      console.log(data);
      this.listProducts = data;
    }, error => { console.log(error) });
  }

  editarProduct(id: any) {
    this._productService.getProduct(id).subscribe((data: any) => {
      this.product = data;
      this.editDate = new Date(data.fechaCreacion).toISOString().split('T')[0];
    }, error => {
      console.log(error);
    });
  }

  agregarProducto() {
    console.log (this.product)
    this._productService.saveProduct(this.product).subscribe(
      data => {
        this.getProducts();
        console.log('Producto guardado con éxito', data);
        this.product = new Product
      },
      error => {
        console.error('Error al guardar el producto', error);
      }
    );
  }

  editarProducto() {
    this.product.fechaCreacion= this.editDate
    this._productService.updateProduct(this.product.id, this.product).subscribe(
      data => {
        this.getProducts();
        console.log('Producto editado con éxito', data);
        this.product=new Product
      },
      error => {
        console.error('Error al editar el producto', error);
      });
  }

  guardarCambiosProducto() {
    const index = this.listProducts.findIndex(item => item.id === this.product.id);
    if (index !== -1) {
      this.listProducts[index] = { ...this.product };
    }
  }

  eliminarProducts(id: any) {
    console.log(id);
    this._prodserv.deleteProduct(id).subscribe(data => {
      this.getProducts();
    }, error => {
      console.log(error);
    });
  }
}
