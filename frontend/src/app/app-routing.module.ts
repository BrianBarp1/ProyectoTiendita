import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { VerProductComponent } from './components/ver-product/ver-product.component';

// export const routes: Routes = [];

const routes: Routes = [
    {path: '', component: ListProductsComponent},
    {path: 'agregar', component: AgregarEditarProductoComponent},
    {path: 'editar/:id', component: AgregarEditarProductoComponent},
    {path: 'ver/:id', component: VerProductComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}