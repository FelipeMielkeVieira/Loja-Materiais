import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {

  estado = 0;
  pais = 0;

  cidade: String
  bairro: String
  rua: String

  complemento = "";
  numero = null;

  codigoEndereco;

  constructor(private enderecoService: EnderecoService, private router: Router, private route: ActivatedRoute) {
    this.codigoEndereco = parseInt(route.snapshot.paramMap.get('editor'))
   }

  ngOnInit() {
    var self = this;
    if(this.codigoEndereco != 0) {
      fetch('/api/buscar_endereco', { method: 'POST', body: JSON.stringify(
        {
          codigo: this.codigoEndereco
        }
      ),
      headers: { "Content-Type": "application/json" }}).then(function (a) {
        a.json().then(function (data) {
          data.forEach(function (e) {
            self.cidade = e.CIDADE
            self.bairro = e.BAIRRO
            self.rua = e.RUA
            self.complemento = e.COMPLEMENTO
            self.numero = e.NUMERO
            self.estado = e.ESTADO
            self.pais = e.PAIS
          })
        })
      })
    }
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
    if(this.codigoEndereco == 0) {
      this.enderecoService.criarEndereco(this.cidade, this.bairro, this.rua, this.numero, this.complemento, this.estado, localStorage.getItem('codigo'))
    } else {
      fetch('/api/editar_endereco', { method: 'POST', body: JSON.stringify(
        {
          codigo: this.codigoEndereco,
          cidade: this.cidade,
          bairro: this.bairro,
          rua: this.rua,
          numero: this.numero,
          complemento: this.complemento,
          estado: this.estado
        }
      ),
      headers: { "Content-Type": "application/json" }})
    }
    this.router.navigate(['/usuario/enderecos'])
  }

  selectEstado(valor) {
    this.pais = valor
    if (valor != 0) {
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

  voltar() {
    this.router.navigate(['/usuario/enderecos'])
  }
}
