import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal'; // Asegúrate de importar el módulo de modal

import { FormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { VerProductComponent } from './components/ver-product/ver-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarProductoComponent,
    ListProductsComponent,
    VerProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
