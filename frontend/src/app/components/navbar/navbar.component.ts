import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  img  = 'https://static.vecteezy.com/system/resources/previews/005/548/394/non_2x/shop-store-market-with-pin-map-location-logo-icon-illustration-design-vector.jpg'

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
