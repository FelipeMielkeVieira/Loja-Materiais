import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private router: Router) { }

  pedidos = [];
  listaVendasPedidos = [];

  ngOnInit() {

    var self = this;
    fetch('/api/buscar_pedidos', {
      method: 'POST', body: JSON.stringify(
        {
          user: localStorage.getItem('codigo')
        }
      ), headers: { "Content-Type": "application/json" }
    }).then((e: any) => {
      e.json().then(dados => {

        console.log(dados)
        self.pedidos = dados;

        self.pedidos.forEach(function (pedido) {
          console.log('entrou pedidos: ' + pedido.CODIGO)
          let listaTemp = [];
          fetch('/api/buscar_vendas', {
            method: 'POST', body: JSON.stringify(
              {
                pedido: pedido.CODIGO
              }
            ), headers: { "Content-Type": "application/json" }
          }).then(function (a) {
            a.json().then(function (vendas) {
              console.log("Vendas: " + vendas)
              vendas.forEach(function (venda) {
                listaTemp.push(venda);
              })
              console.log("ListaTemp: " + listaTemp)
              pedido.produtos = listaTemp;
              console.log(pedido)
            })
          })
        })
      })
    })
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

  vendas() {
    console.log('Pedidos: ' + this.pedidos)
    console.log("Vendas: " + this.listaVendasPedidos)
  }
}
