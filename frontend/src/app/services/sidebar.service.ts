import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SidebarService{
    menu: any[]=[{
        titulo: 'Dashboard',
        icono: 'nav-icon fas fa-tachometer-alt',
        submenu:[
            {titulo: 'Usuario', url: 'Usuario'},
            {titulo: 'Productos', url: 'Productos'}
        ]
    }]
}