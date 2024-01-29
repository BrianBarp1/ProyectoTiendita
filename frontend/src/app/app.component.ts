import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { VerProductComponent } from './components/ver-product/ver-product.component';




@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, NavbarComponent,AgregarEditarProductoComponent,ListProductsComponent,VerProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'frontend';
}
