import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {

  constructor(private router: Router) { }

  listaPagamentos = [];

  ngOnInit() {
    var self = this;
    fetch('/api/buscar_pagamentos', { method: 'POST' }).then(function (e) {
      e.json().then(function (data) {
        self.listaPagamentos = data
      })
    })
  }

  conta() {
    this.router.navigate(['/usuario/'])
  }

  adicionar() {

    this.modal();
  }

  modal() {

    var self = this;
    let body = document.querySelector('#teste')
    console.log(body)
    let modal = document.createElement('div')
    modal.id = 'modal'

    let titulo = document.createElement('h3')
    titulo.innerText = 'Adicionar Cartão'
    titulo.className = 'titulo'
    modal.appendChild(titulo)

    let titular = document.createElement('input')
    titular.className = 'titular'
    titular.id = 'titular'
    titular.placeholder = 'Nome do Titular'
    modal.appendChild(titular)

    let numeroCartao = document.createElement('input')
    numeroCartao.className = 'titular'
    numeroCartao.id = 'numeroCartao'
    numeroCartao.placeholder = 'Número do Cartão'
    numeroCartao.value = "";
    modal.appendChild(numeroCartao)

    let divCodigoData = document.createElement('div')
    divCodigoData.className = 'titular'
    divCodigoData.style.padding = '0'
    modal.appendChild(divCodigoData)

    let codigoSeguranca = document.createElement('input')
    codigoSeguranca.style.width = '55%'
    codigoSeguranca.style.marginRight = '5%'
    codigoSeguranca.style.padding = '5px 10px'
    codigoSeguranca.placeholder = 'Código de Segurança'
    codigoSeguranca.id = 'codigoSeguranca'

    let validade = document.createElement('input')
    validade.placeholder = '__/__/____'
    validade.style.width = '40%'
    validade.style.padding = '5px 10px'
    validade.id = 'validade'

    let botaoCadastro = document.createElement('button')
    botaoCadastro.className = 'cadastroCartao'
    botaoCadastro.innerText = 'Cadastrar'
    botaoCadastro.onclick = function () {
      self.cadastrar();
    }
    modal.appendChild(botaoCadastro)

    let botaoCancelar = document.createElement('button')
    botaoCancelar.className = 'cancelarCartao'
    botaoCancelar.innerText = 'Cancelar'
    botaoCancelar.onclick = function () {
      modal.remove();
    }
    modal.appendChild(botaoCancelar)

    divCodigoData.appendChild(codigoSeguranca)
    divCodigoData.appendChild(validade)

    body.appendChild(modal);
  }

  cadastrar() {

    const numeroDiv = document.querySelector('#numeroCartao') as HTMLInputElement
    let codigoDiv = document.querySelector('#codigoSeguranca') as HTMLInputElement
    let validadeDiv = document.querySelector('#validade') as HTMLInputElement
    let titularDiv = document.querySelector('#titular') as HTMLInputElement

    let numero = numeroDiv.value
    let codigo = codigoDiv.value
    let validade = validadeDiv.value
    let titular = titularDiv.value

    fetch('/api/adicionar_pagamento', { method: 'POST', body: JSON.stringify({ metodo: 'Cartão', titular: titular, numero: numero, validade: validade, chave_seguranca: codigo, user_codigo: localStorage.getItem('codigo') }), headers: { "Content-Type": "application/json" } })
    let modal = document.querySelector('#modal')
    modal.remove();
    this.colocarPagamentos();
  }

  colocarPagamentos() {

    var self = this;
    fetch('/api/buscar_pagamentos', { method: 'POST' }).then(function (result) {
      result.json().then(function (e) {
        self.listaPagamentos = e;
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

  excluirPagamento(index, codigo) {
    this.listaPagamentos.splice(index, 1);
    fetch('/api/excluir_pagamento', {
      method: 'POST', body: JSON.stringify({
        codigo: codigo
      }),
      headers: { "Content-Type": "application/json" }
    })
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

}
