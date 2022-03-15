import { AnimationGroupPlayer } from '@angular/animations/src/players/animation_group_player';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService
  ) { }

  nome = "";
  senha = "";

  ngOnInit() {
    this.usuarioService.buscarUsuario()
      .then(resultado => {
        console.log('RESULTADO:', resultado)
      }).catch(erro => {
        console.log('ERRO:', erro)
      })
  }

  cadastro() {
    this.router.navigate(['usuario/cadastro/'])
  }

  voltar() {
    let caminho = localStorage.getItem('path')
    this.router.navigate([caminho])
  }

  logar() {

    var self = this;
    fetch('http://localhost:3000/api/login', { method: 'POST', body: JSON.stringify({ nome: this.nome, senha: this.senha }), headers: { "Content-Type": "application/json" } }).then(function (e) {

      console.log(e)

      e.json().then(function (data) {

        console.log("teste2: ", data)
        console.log(data.user.NOME)

        if (data.user) {

          localStorage.setItem('nome', data.user.NOME)
          localStorage.setItem('senha', self.senha)

          let caminho = localStorage.getItem('path')
          self.router.navigate([caminho])
        }
      })
    })
  }
}
