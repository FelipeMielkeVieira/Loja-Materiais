import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProdutoComponent } from './produto/produto.component';

import CheckLogged from '../checkLogged.canactivate';

import { PaginaCarrinhoComponent } from '../carrinho/pagina-carrinho/pagina-carrinho.component';
import { PedidoComponent } from '../carrinho/pedido/pedido.component';
import { CadastroComponent } from '../usuario/cadastro/cadastro.component';
import { LoginComponent } from '../usuario/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { ContaComponent } from '../usuario/conta/conta.component';
import { PedidosComponent } from '../carrinho/pedidos/pedidos.component';
import { InfoComponent } from '../usuario/info/info.component';
import { EnderecosComponent } from '../usuario/enderecos/enderecos.component';
import { PagamentosComponent } from '../usuario/pagamentos/pagamentos.component';
import { ValesComponent } from '../usuario/vales/vales.component';

const routes: Routes = [
  {
    path: 'produtos', canActivate: [CheckLogged], children: [
      { path: '', component: PaginaPrincipalComponent},
      { path: ':codigo', component: ProdutoComponent}
    ]
  },
  { path: 'usuario', canActivate: [CheckLogged], children: [
    { path: '', component: ContaComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'login', component: LoginComponent},
    { path: 'info', component: InfoComponent},
    { path: 'enderecos', component: EnderecosComponent},
    { path: 'pagamentos', component: PagamentosComponent},
    { path: 'vales', component: ValesComponent}
  ]
  },
  { path: 'carrinho', canActivate: [CheckLogged], children: [
    { path: '', component: PaginaCarrinhoComponent},
    { path: 'pedidos', component: PedidosComponent},
    { path: 'pedido', component: PedidoComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [PaginaPrincipalComponent, ProdutoComponent],
  exports: [PaginaPrincipalComponent, ProdutoComponent],
  providers: [CheckLogged]
})
export class LojaModule { }
