import { AnimationGroupPlayer } from '@angular/animations/src/players/animation_group_player';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  nome = "";
  senha = "";

  ngOnInit() {
    localStorage.setItem('path', location.pathname)
  }

  entrar() {
    var self = this
    fetch('http://localhost:3000/api/buscar_usuario', { method: 'POST'}).then(function (result) {
      
      result.json().then(function(data) {
      
        data.forEach(e => {

          if(self.nome == e.NOME && self.senha == e.SENHA) {
            localStorage.setItem('usuario', e.NOME)
            self.router.navigate(['/'])
          }
        });
      })
      
    })
  }

}
