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
    localStorage.setItem('nome', this.nome)
    localStorage.setItem('senha', this.senha)
    this.router.navigate(['/'])
  }

}
