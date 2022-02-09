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
    localStorage.setItem('path', location.pathname)
  }

  entrar() {

    var self = this
    let contagem = 0;

    fetch('/api/buscar_usuario', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {

        console.log(data)

        data.forEach(e => {

          console.log(self.nome)
          console.log(e.NOME)
          console.log(self.senha)
          console.log(e.SENHA)
          if (self.nome == e.NOME && self.senha == e.SENHA) {
            contagem++
          }
        });

        if (contagem > 0) {
          localStorage.setItem('nome', self.nome)
          localStorage.setItem('senha', self.senha)
          self.router.navigate(['/'])
        }
      })
    })
  }

}
