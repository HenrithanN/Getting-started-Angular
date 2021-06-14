import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  items;
  checkoutForm;
  precoDeEnvio;
  constructor(
    private cartService: CartService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.precoDeEnvio = this.cartService.precoEnvioSelected();
    this.checkoutForm = this.fb.group({
      nome: '',
      endereco: ''
    });
  }

  onSubmit(): void{
    console.warn('Sua ordem foi submetida!',
    this.checkoutForm.value);
    window.alert('Pedido Encaminhado');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
