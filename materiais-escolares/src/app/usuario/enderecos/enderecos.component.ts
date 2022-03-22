import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {

  estado = 0;
  
  cidade: String
  bairro: String
  rua: String

  complemento = "";
  numero = null;

  constructor(private enderecoService: EnderecoService, private router: Router) { }

  ngOnInit() {
    var self = this;

    this.enderecoService.buscarEndereco(localStorage.getItem('codigo')).then(function (result) {
      self.listarEnderecos(result);
    })
    this.paisesSelect();
  }

  listarEnderecos(result) {
    
    result.forEach(e => {
      console.log(e)
    });
  }

  adicionarEndereco() {
    this.router.navigate(['/usuario/enderecos/' + 0])
    // this.enderecoService.criarEndereco(this.cidade, this.bairro, this.rua, this.numero, this.complemento, this.estado, localStorage.getItem('codigo'))
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
