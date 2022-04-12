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

    body.appendChild(modal);
  }

}
