import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import CheckLogged from './checkLogged.canactivate';
import { PaginaPrincipalComponent } from './loja/pagina-principal/pagina-principal.component';
import { UsuarioModule } from './usuario/usuario.module';
import { LojaModule } from './loja/loja.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: PaginaPrincipalComponent,
        canActivate: []
      }
    ]),
    BrowserModule,
    UsuarioModule,
    LojaModule,
    CarrinhoModule,
    RouterModule,
    FormsModule
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
