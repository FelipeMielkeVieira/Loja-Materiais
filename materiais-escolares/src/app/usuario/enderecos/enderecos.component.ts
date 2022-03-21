import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {

  constructor(private enderecoService: EnderecoService) { }

  bairro = "";
  rua = "";
  complemento = "";
  numero = null;

  ngOnInit() {
    var self = this;

    this.enderecoService.buscarEndereco(localStorage.getItem('codigo')).then(function (result) {
      self.listarEnderecos(result);
    })
    this.paisesSelect();
    // this.enderecoService.criarEndereco('Jaraguá', 'Centro', 'Amazonas', 240, 'Fundos', 1, localStorage.getItem('codigo'))
  }

  listarEnderecos(result) {
    
    result.forEach(e => {
      console.log(e)
    });
  }

  adicionarEndereco() {

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

}
