import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCarrinhoComponent } from './pagina-carrinho/pagina-carrinho.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaCarrinhoComponent, PedidoComponent, PedidosComponent],
  exports: [PedidoComponent, PaginaCarrinhoComponent, PedidosComponent]
})
export class CarrinhoModule { }
