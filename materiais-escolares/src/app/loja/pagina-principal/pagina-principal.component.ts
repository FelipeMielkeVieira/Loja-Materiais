import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  usuario = localStorage.getItem('nome')

  ngOnInit() {
    console.log(location.pathname)
    localStorage.setItem('path', location.pathname)
  }

  entrar() {
    this.router.navigate(['usuario/login'])
  }

  cadastrar() {
    this.router.navigate(['usuario/cadastro'])
  }

  carrinho() {
    if(this.usuario != '') {
      this.router.navigate(['carrinho'])
    }
  }

  logout() {
    localStorage.setItem('nome', '')
    localStorage.setItem('senha', '')
    window.location.reload()
  }

}
