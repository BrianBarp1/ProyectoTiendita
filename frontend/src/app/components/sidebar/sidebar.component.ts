import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('click', ['$event.target'])
  onClick(target: any) {
    // Verifica si el elemento clickeado es un enlace del menú
    if (target.tagName === 'A') {
      // Obtiene la URL del enlace clickeado
      const url = target.getAttribute('routerLink');
      // Verifica si la URL es válida
      if (url) {
        // Navega a la URL del enlace clickeado
        this.router.navigateByUrl(url);
      }
    }
  }
}
