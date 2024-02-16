import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { ListProductsComponent } from './components/list-products/list-products.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { VerProductComponent } from './components/ver-product/ver-product.component';

const routes: Routes = [
    {path: '', component: ListProductsComponent},
    {path: 'agregar', component: AgregarEditarProductoComponent},
    {path: 'editar/:id', component: AgregarEditarProductoComponent},
    {path: 'ver/:id', component: VerProductComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
        ReactiveFormsModule // Agrega ReactiveFormsModule aquí en la lista de imports
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
