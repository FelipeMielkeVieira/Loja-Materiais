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

import {AtomSpinnerModule} from 'angular-epic-spinners'
import { NbThemeModule } from '@nebular/theme';
import { NotifierModule } from 'angular-notifier';

import { StickyNavModule } from 'ng2-sticky-nav';

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
    FormsModule,
    AtomSpinnerModule,
    NbThemeModule.forRoot(),
    NotifierModule.withConfig({
      // Custom options in here
    }),
    StickyNavModule
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
