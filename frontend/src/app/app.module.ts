import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importa tus componentes aquí
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientComponent } from './components/client/client.component';
import { OrdersComponent } from './components/orders/orders.component';

// Importa el servicio ClientService
import { ClientService } from './services/frontend.service'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarProductoComponent,
    ListProductsComponent,
    SidebarComponent,
    ClientComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [
    ClientService // Añade el servicio ClientService a los providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
