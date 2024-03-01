import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { ListProductsComponent } from './components/list-products/list-products.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { ClientComponent } from './components/client/client.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
    { path: 'productos', component: ListProductsComponent },
    { path: 'agregar', component: AgregarEditarProductoComponent },
    { path: 'editar/:id', component: AgregarEditarProductoComponent },
    { path: 'clientes', component: ClientComponent },
    { path: 'order', component: OrdersComponent }, 
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
        ReactiveFormsModule // Agrega ReactiveFormsModule aquí en la lista de imports
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
