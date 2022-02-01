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

const routes: Routes = [
  {
    path: 'produtos', canActivate: [CheckLogged], children: [
      { path: '', component: PaginaPrincipalComponent},
      { path: ':codigo', component: ProdutoComponent}
    ]
  },
  { path: 'usuario', canActivate: [CheckLogged], children: [
    { path: 'cadastro', component: CadastroComponent},
    { path: 'login', component: LoginComponent}
  ]
  },
  { path: 'carrinho', canActivate: [CheckLogged], children: [
    { path: '', component: PaginaCarrinhoComponent},
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
