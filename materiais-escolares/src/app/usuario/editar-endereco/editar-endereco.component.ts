import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {

  estado = 0;
  
  cidade: String
  bairro: String
  rua: String

  complemento = "";
  numero = null;

  constructor(private enderecoService: EnderecoService, private router: Router) { }

  ngOnInit() {
    this.paisesSelect();
  }

  paisesSelect() {
    this.enderecoService.buscarPaises().then(function (result: any) {
      var self = this;
      result.forEach(function (e) {
        let selectPais = document.querySelector('.selectPais')
        let opcao = document.createElement('option')

        opcao.value = e.CODIGO
        opcao.innerText = e.NOME

        selectPais.appendChild(opcao);
      }) 
    })
  }

  adicionarEndereco() {
    this.enderecoService.criarEndereco(this.cidade, this.bairro, this.rua, this.numero, this.complemento, this.estado, localStorage.getItem('codigo'))
  }

  selectEstado(valor) {
    if(valor != 0) {
      this.enderecoService.buscarEstados(valor).then(function (result: any) {
        console.log(result);
        result.forEach(function (e) {
          let selectEstado = document.querySelector('.selectEstado')
          let opcao = document.createElement('option')
  
          opcao.value = e.CODIGO
          opcao.innerText = e.SIGLA
          selectEstado.appendChild(opcao);
        }) 
      })
    }
  }

  estadoSelecionado(valor) {
    this.estado = valor
  }

}
