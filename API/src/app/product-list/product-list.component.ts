import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void{
    this.listarProdutos();
  }

  listarProdutos(): any{
    return this.productService.getProducts().subscribe((res) => (this.products = res));
  }

  onShare(): any{
    window.alert('O Produto foi compartilhado!');
  }
  onNotify(): any{
    window.alert('Você será notificado quando este produto estiver disponível para compra!');
  }
}
