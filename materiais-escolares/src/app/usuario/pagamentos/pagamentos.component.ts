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
    fetch('/api/buscar_pagamentos', { method: 'POST'}).then(function (e) {
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
    titular.placeholder = 'Nome do Titular'
    modal.appendChild(titular)

    let numeroCartao = document.createElement('input')
    numeroCartao.className = 'titular'
    numeroCartao.placeholder = 'Número do Cartão'
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

    let validade = document.createElement('input')
    validade.placeholder = '__/__/____'
    validade.style.width = '40%'
    validade.style.padding = '5px 10px'

    let botaoCadastro = document.createElement('button')
    botaoCadastro.className = 'cadastroCartao'
    botaoCadastro.innerText = 'Cadastrar'
    modal.appendChild(botaoCadastro)

    divCodigoData.appendChild(codigoSeguranca)
    divCodigoData.appendChild(validade)

    body.appendChild(modal);
  }

}
