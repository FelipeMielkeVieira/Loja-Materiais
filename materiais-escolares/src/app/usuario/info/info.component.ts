import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.usuarioEspecifico(localStorage.getItem('nome')).then((dados: any) => {

      if(dados[0].EMAIL != 'null') {
        this.email = dados[0].EMAIL;
      } else {
        this.email = "-";
      }

      if(dados[0].TELEFONE != 'null') {
        this.telefone = dados[0].TELEFONE;
      } else {
        this.telefone = "-";
      }

      for(let i = 0; i < dados[0].SENHA.length; i++) {
        this.senha = this.senha + "*"
      }

      let data = new Date(dados[0].CRIACAO)
      let ano = data.getFullYear();
      let mes = data.getMonth();
      let dia = String(data.getDate()).padStart(2,'0');

      let diaf
      let mesf

      if(mes < 10) {
        mesf = "0" + mes
      } else {
        mesf = mes;
      }
      if(dia.length == 1) {
        diaf = "0" + dia
      } else {
        diaf = dia;
      }

      this.criacao = dia + "/" + mesf + "/" + ano
    })
  }

  email = "";
  senha = "";
  criacao = "";
  telefone = "";
  usuario = localStorage.getItem('nome')

  conta() {
    this.router.navigate(['/usuario'])
  }

  editar(valor) {
    this.router.navigate(['usuario/info/' + valor])
  }

  excluir() {
    this.usuarioService.excluirUsuario(this.usuario);
    localStorage.setItem('nome', '')
    this.router.navigate(['/usuario/login'])
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

}
