import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ValesComponent } from '../vales/vales.component';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {

  estado = 0;
  pais = 0;
  paisNome = "";
  estadoNome = "";

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
    if (this.codigoEndereco != 0) {
      fetch('/api/buscar_endereco_completo', {
        method: 'POST', body: JSON.stringify(
          {
            codigo: this.codigoEndereco
          }
        ),
        headers: { "Content-Type": "application/json" }
      }).then(function (a) {
        a.json().then(function (data) {
          data.forEach(function (e) {
            self.cidade = e.CIDADE
            self.bairro = e.BAIRRO
            self.rua = e.RUA
            self.complemento = e.COMPLEMENTO
            self.numero = e.NUMERO
            self.estadoNome = e.ESTADO
            self.paisNome = e.PAIS

            if(self.codigoEndereco != 0) {
              self.buscarEstadoPais();
            }
          })
        })
      })
    }
    this.paisesSelect();
  }

  buscarEstadoPais() {

    var self = this;
    fetch('/api/buscar_pais_especifico', {method: 'POST', body: JSON.stringify(
      {
        nome: this.paisNome
      }
    ),
    headers: { "Content-Type": "application/json" }}).then(function (e) {
      e.json().then(function (a) {
        console.log(a)
        self.pais = a[0].CODIGO

        fetch('/api/buscar_estado_especifico', {method: 'POST', body: JSON.stringify(
          {
            nome: self.estadoNome
          }
        ),
        headers: { "Content-Type": "application/json" }}).then(function (c) {
          c.json().then(function (b) {
            self.estado = b[0].CODIGO
            self.selectEstado(self.pais);
          })
        })
      })
    })
  }

  paisesSelect() {
    var self = this;
    this.enderecoService.buscarPaises().then(function (result: any) {
      result.forEach(function (e) {
        if (e.NOME != self.paisNome) {
          let selectPais = document.querySelector('.selectPais')
          let opcao = document.createElement('option')

          opcao.value = e.CODIGO
          opcao.innerText = e.NOME

          selectPais.appendChild(opcao);
        }
      })
    })
  }

  adicionarEndereco() {

    var self = this;
    if (this.codigoEndereco == 0) {
      this.enderecoService.criarEndereco(this.cidade, this.bairro, this.rua, this.numero, this.complemento, this.estado, localStorage.getItem('codigo'))
    } else {
      console.log("Estado:",this.estado)
      fetch('/api/editar_endereco', {
        method: 'POST', body: JSON.stringify(
          {
            codigo: self.codigoEndereco,
            cidade: self.cidade,
            bairro: self.bairro,
            rua: self.rua,
            numero: self.numero,
            complemento: self.complemento,
            estado: self.estado
          }
        ),
        headers: { "Content-Type": "application/json" }
      })
    }
    this.router.navigate(['/usuario/enderecos'])
  }

  selectEstado(valor) {
    console.log(valor)
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
