import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ContaComponent } from './conta/conta.component';

import {AtomSpinnerModule} from 'angular-epic-spinners'
import { NbAlertModule } from '@nebular/theme';
import { InfoComponent } from './info/info.component';
import { EnderecosComponent } from './enderecos/enderecos.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { ValesComponent } from './vales/vales.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AtomSpinnerModule,
    NbAlertModule
  ],
  declarations: [LoginComponent, CadastroComponent, ContaComponent, InfoComponent, EnderecosComponent, PagamentosComponent, ValesComponent],
  exports: [CadastroComponent, LoginComponent, ContaComponent]
})
export class UsuarioModule { }
