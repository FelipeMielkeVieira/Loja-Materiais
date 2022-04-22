import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  @Output() clickPesquisa = new EventEmitter<string>();

  pesquisa = "";

  ngOnInit() {
    if(localStorage.getItem('pesquisa') && localStorage.getItem('pesquisa') != '') {
      this.pesquisa = localStorage.getItem('pesquisa');
    }
  }

  usuario = localStorage.getItem('nome')

  entrar() {
    this.router.navigate(['usuario/login'])
  }

  cadastrar() {
    this.router.navigate(['usuario/cadastro'])
  }

  carrinho() {
    this.router.navigate(['carrinho'])
  }

  logout() {
    localStorage.setItem('nome', '')
    localStorage.setItem('senha', '')
    localStorage.setItem('codigo', '')
    localStorage.setItem('enderecoAtual', '1')
    localStorage.setItem('pagamento', '1')
    localStorage.setItem('carrinho', JSON.stringify([]));
    this.router.navigate(['/'])
  }

  conta() {
    this.router.navigate(['usuario/'])
  }

  pedidos() {
    this.router.navigate(['carrinho/pedidos'])
  }

  paginaInicial() {
    this.router.navigate([''])
  }

  pesquisar() {
    this.clickPesquisa.emit(this.pesquisa);
  }

}
