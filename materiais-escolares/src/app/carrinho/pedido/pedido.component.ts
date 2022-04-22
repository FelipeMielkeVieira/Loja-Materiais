import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private router: Router) { }

  carrinho = [];
  codigoEndereco;
  desconto = 0;
  endereco = {
    BAIRRO: "",
    CIDADE: "",
    RUA: "",
    NUMERO: 0,
    PAIS: "",
    ESTADO: ""
  };
  valor = 0.00;
  pagamento  = {
    TITULAR: "",
    NUMERO: 0
  };

  ngOnInit() {
    var self = this;
    this.codigoEndereco = localStorage.getItem('enderecoAtual');
    console.log(this.codigoEndereco)

    this.desconto = parseInt(localStorage.getItem('desconto'))

    fetch('/api/buscar_endereco_completo', {
      method: 'POST', body: JSON.stringify(
        {
          codigo: this.codigoEndereco
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (result) {
      result.json().then(function (data) {
        console.log(data)
        self.endereco = data[0]
      })
    })

    localStorage.setItem('path', location.pathname)
    this.carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    console.log(this.carrinho)

    this.carrinho.forEach(function (e) {
      self.valor += e.VALOR
    })
    self.valor -= this.desconto;

    if(!localStorage.getItem('pagamento')) {
      localStorage.setItem('pagamento', '1') 
    }

    fetch('/api/buscar_pagamentos', { method: 'POST', body: JSON.stringify({ codigo: localStorage.getItem('codigo') }), headers: { "Content-Type": "application/json" } }).then(function (e) {
      e.json().then(function (data) {
        data.forEach(function (e) {
          if(e.CODIGO == localStorage.getItem('pagamento')) {
            self.pagamento = e;
          }
        })
      })
    })
  }

  getPreco(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

  selecao() {
    this.router.navigate(['/produtos/endereco'])
  }

  editarNumero(numero) {
    let numero1 = this.setCharAt(numero, 4, "*");
    let numero2 = this.setCharAt(numero1, 5, "*");
    let numero3 = this.setCharAt(numero2, 6, "*");
    let numero4 = this.setCharAt(numero3, 7, "*");
    let numero5 = this.setCharAt(numero4, 8, "*");
    let numero6 = this.setCharAt(numero5, 9, "*");
    let numero7 = this.setCharAt(numero6, 10, "*");
    let numero8 = this.setCharAt(numero7, 11, "*");
    return numero8;
  }

  setCharAt(str: String, index: number, chr: String) {
    if (index > str.length - 1) return str;
    str = str.toString();
    let numeroFinal = str.substring(0, index) + chr + str.substring(index + 1);
    return numeroFinal
  }

  selecaoPagamento() {
    this.router.navigate(['/carrinho/pagamento'])
  }

  fazerPedido() {
    
  }

}
