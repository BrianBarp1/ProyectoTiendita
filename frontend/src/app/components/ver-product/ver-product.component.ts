import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/frontend.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-ver-product',
  templateUrl: './ver-product.component.html',
  styleUrl: './ver-product.component.css'
})
export class VerProductComponent {
  id: number;
  product: any;

  constructor(private aRoute: ActivatedRoute, 
              private _prodserv: ProductService){
    this.aRoute.snapshot.paramMap.get('id'),
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void{
    this.getProduct();
    

  }

  getProduct(){
    this._prodserv.getProduct(this.id).subscribe(data =>{
      this.product = data;
    })
  }

}
