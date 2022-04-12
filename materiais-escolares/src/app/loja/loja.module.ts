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

import { UtilitariosModule } from '../utilitarios/utilitarios.module';
import { EditarComponent } from '../usuario/editar/editar.component';
import { EditarEnderecoComponent } from '../usuario/editar-endereco/editar-endereco.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'produtos', children: [
      { path: '', component: PaginaPrincipalComponent },
      { path: ':codigo', component: ProdutoComponent }
    ]
  },
  {
    path: 'usuario', children: [
      { path: '', canActivate: [CheckLogged], component: ContaComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'login', component: LoginComponent },
      { path: 'info', canActivate: [CheckLogged], children: [
        { path: '', component: InfoComponent},
        { path: ':editor', component: EditarComponent}
      ] },
      { path: 'enderecos', canActivate: [CheckLogged], children: [
        { path: '', component: EnderecosComponent},
        { path: ':editor', component: EditarEnderecoComponent}
      ] },
      { path: 'pagamentos', canActivate: [CheckLogged], component: PagamentosComponent },
      { path: 'vales', canActivate: [CheckLogged], component: ValesComponent }
    ]
  },
  {
    path: 'carrinho', canActivate: [CheckLogged], children: [
      { path: '', component: PaginaCarrinhoComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'pedido', component: PedidoComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    UtilitariosModule,
    FormsModule
  ],
  declarations: [PaginaPrincipalComponent, ProdutoComponent],
  exports: [PaginaPrincipalComponent, ProdutoComponent],
  providers: [CheckLogged]
})
export class LojaModule { }
