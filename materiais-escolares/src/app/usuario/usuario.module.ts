import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ContaComponent } from './conta/conta.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent, CadastroComponent, ContaComponent],
  exports: [CadastroComponent, LoginComponent, ContaComponent]
})
export class UsuarioModule { }
