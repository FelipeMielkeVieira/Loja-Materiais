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
  listaMateriais = [];
  diasAtuais = 0;

  ngOnInit() {

    this.calcularDataAtual();
    this.pegarMateriais();
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

  pegarMateriais() {
    var self = this;
    fetch('/api/buscar_produto', {
      method: 'POST', body: JSON.stringify(
        {
          ordenar: 1
        }
      ), headers: { "Content-Type": "application/json" }
    }).then(function (result) {
      result.json().then(function (data) {
        self.listaMateriais = data;
      })
    })
  }

  material(codigo) {
    let material;
    this.listaMateriais.forEach(function (e) {
      if(codigo == e.CODIGO) {
        material = e
      }
    })
    return material;
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

  getPreco(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  calcularDataAtual() {
    let data = new Date();

    let dias = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    this.diasAtuais = dias + (mes * 30) + (ano * 365);
  }

  calcularData(data) {

    let data2 = new Date(data)
    let dias = data2.getDate();
    let mes = data2.getMonth();
    let ano = data2.getFullYear();

    return dias + (mes * 30) + (ano * 365);
  }

  cancelar(codigo, index) {
    this.pedidos.splice(index, 1);
    fetch('/api/excluir_pedido', {
      method: 'POST', body: JSON.stringify({
        codigo: codigo
      }),
      headers: { "Content-Type": "application/json" }
    })
  }
}
