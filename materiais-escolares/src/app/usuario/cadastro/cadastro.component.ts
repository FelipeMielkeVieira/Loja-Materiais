import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nome = ""
  senha = ""
  senha2 = "";
  transform = "";

  email = 0;

  cadastrar() {

    if (this.nome != "") {

      if (this.transform != "") {

        if (this.senha != "") {

          if (this.transformar()) {
            if (this.senha == this.senha2) {

              let data = new Date();
              let dia = data.getDate();
              let ano = data.getFullYear();
              let mes = (data.getMonth() + 1);

              let diaf
              let mesf
              
              if((dia + '').length == 1) {
                diaf = "0" + dia
              } else {
                diaf = dia
              }
              if((mes + '').length == 1) {
                mesf = "0" + mes
              } else {
                mesf = mes
              }

              let dataFinal = diaf + "/" + mesf + "/" + ano

              if (this.email != 0) {
                fetch('/api/criar_usuario', { method: 'POST', body: JSON.stringify({ nome: this.nome, senha: this.senha, email: this.transform, telefone: null, data: dataFinal }), headers: { "Content-Type": "application/json" } });
                this.router.navigate(['usuario/login'])
              } else {
                fetch('/api/criar_usuario', { method: 'POST', body: JSON.stringify({ nome: this.nome, senha: this.senha, email: null, telefone: this.transform, data: dataFinal }), headers: { "Content-Type": "application/json" } });
                this.router.navigate(['usuario/login'])
              }
            } else {
              alert("As senhas não coincidem!")
            }
          } else {
            alert("Insira um email ou número de telefone válido!")
          }
        } else {
          alert("Crie uma senha para sua conta!")
        }
      } else {
        alert("Insira um email ou número de telefone!")
      }
    } else {
      alert("Insira um nome de usuário!")
    }
  }

  transformar() {

    this.transform.replace('(', '');
    this.transform.replace(')', '');

    console.log(isNaN(parseInt(this.transform)))

    if (isNaN(parseInt(this.transform))) {

      if (this.transform.indexOf("@") >= 0) {
        this.email = 1;
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  login() {
    this.router.navigate(['usuario/login'])
  }
}
