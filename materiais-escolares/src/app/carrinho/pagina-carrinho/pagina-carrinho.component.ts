import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-carrinho',
  templateUrl: './pagina-carrinho.component.html',
  styleUrls: ['./pagina-carrinho.component.css']
})
export class PaginaCarrinhoComponent implements OnInit {

  constructor(private router: Router) { }

  carrinho = [];
  valor = 0.00;

  ngOnInit() {
    localStorage.setItem('path', location.pathname)
    this.carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    console.log(this.carrinho)
  }

  getPreco(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  paginaPrincipal() {
    this.router.navigate(['/'])
  }

}
