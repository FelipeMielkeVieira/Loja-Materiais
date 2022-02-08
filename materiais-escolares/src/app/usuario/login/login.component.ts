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
    localStorage.setItem('nome', this.nome)
    localStorage.setItem('senha', this.senha)
    this.router.navigate(['/'])
  }

}
