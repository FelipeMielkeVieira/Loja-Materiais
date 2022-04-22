import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCarrinhoComponent } from './pagina-carrinho/pagina-carrinho.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UtilitariosModule } from '../utilitarios/utilitarios.module';
import { SelectPagamentoComponent } from './select-pagamento/select-pagamento.component';

@NgModule({
  imports: [
    CommonModule,
    UtilitariosModule
  ],
  declarations: [PaginaCarrinhoComponent, PedidoComponent, PedidosComponent, SelectPagamentoComponent],
  exports: [PedidoComponent, PaginaCarrinhoComponent, PedidosComponent, SelectPagamentoComponent]
})
export class CarrinhoModule { }
