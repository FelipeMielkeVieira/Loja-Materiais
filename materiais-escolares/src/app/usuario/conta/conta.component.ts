import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.setItem('emCompra', undefined)
  }

  pedidos() {
    this.router.navigate(['carrinho/pedidos'])
  }

  info() {
    this.router.navigate(['usuario/info'])
  }

  enderecos() {
    this.router.navigate(['usuario/enderecos'])
  }

  pagamentos() {
    this.router.navigate(['usuario/pagamentos'])
  }

  vales() {
    this.router.navigate(['usuario/vales'])
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }
}
