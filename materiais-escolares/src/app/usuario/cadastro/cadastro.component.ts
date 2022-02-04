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

  cadastrar() {
    fetch('http://localhost:3000/api/criar_usuario', { method: 'POST', body: JSON.stringify({ nome: this.nome, senha: this.senha}), headers: {"Content-Type": "application/json"}});
    this.router.navigate(['usuario/login'])
  }

}
