import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCarrinhoComponent } from './pagina-carrinho/pagina-carrinho.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaCarrinhoComponent, PedidoComponent],
  exports: [PedidoComponent, PaginaCarrinhoComponent]
})
export class CarrinhoModule { }
