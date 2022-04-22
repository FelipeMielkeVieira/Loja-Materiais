import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-pagamento',
  templateUrl: './select-pagamento.component.html',
  styleUrls: ['./select-pagamento.component.css']
})
export class SelectPagamentoComponent implements OnInit {

  constructor(private router: Router) { }

  listaPagamentos = [];

  ngOnInit() {
    var self = this;
    fetch('/api/buscar_pagamentos', { method: 'POST', body: JSON.stringify({ codigo: localStorage.getItem('codigo') }), headers: { "Content-Type": "application/json" } }).then(function (e) {
      e.json().then(function (data) {
        self.listaPagamentos = data
      })
    })
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

  selecionarPagamento(codigo) {
    localStorage.setItem('pagamento', codigo)
    this.router.navigate([localStorage.getItem('path')])
  }

}
