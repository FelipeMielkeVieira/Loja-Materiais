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
    var self = this;
    localStorage.setItem('path', location.pathname)
    this.carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    this.carrinho.forEach(function (e) {
      self.valor += e.VALOR * e.quantidade
    })
  }

  getPreco(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  paginaPrincipal() {
    this.router.navigate(['/'])
  }

  excluir(index, valor) {
    this.carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    this.valor = this.valor - valor
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

  fazerPedido() {
    this.router.navigate(['/carrinho/pedido'])
  }

}
