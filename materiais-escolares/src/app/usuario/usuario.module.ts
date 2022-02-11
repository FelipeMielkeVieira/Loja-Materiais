import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ContaComponent } from './conta/conta.component';

import {AtomSpinnerModule} from 'angular-epic-spinners'
import { NbAlertModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AtomSpinnerModule,
    NbAlertModule
  ],
  declarations: [LoginComponent, CadastroComponent, ContaComponent],
  exports: [CadastroComponent, LoginComponent, ContaComponent]
})
export class UsuarioModule { }
