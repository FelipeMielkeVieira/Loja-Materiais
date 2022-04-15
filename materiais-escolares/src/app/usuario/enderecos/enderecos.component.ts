import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {

  constructor(private enderecoService: EnderecoService, private router: Router) { }

  listaEnderecos = [];

  ngOnInit() {
    var self = this;

    this.enderecoService.buscarEnderecoCompleto(localStorage.getItem('codigo')).then(function (result) {
      self.listarEnderecos(result);
    })
  }

  listarEnderecos(result) {
    
    this.listaEnderecos = result;
    var self = this;
    let linhaAtual
    let contagem = 0;

    result.forEach(e => {
      let divEnderecos = document.querySelector('.enderecos')
      divEnderecos.className = 'divEnderecos'

      if (contagem == 0) {
        linhaAtual = document.createElement('div')
        linhaAtual.className = 'linha'

        divEnderecos.appendChild(linhaAtual)
        contagem = 1;
      } else {
        linhaAtual = document.querySelector('.linha')
        contagem = 0;
      }

      let pais = document.createElement('div')
      pais.innerText = e.PAIS
      linhaAtual.appendChild(pais)

      contagem++;
    });
  }

  adicionarEndereco() {
    this.router.navigate(['/usuario/enderecos/' + 0])
  }

  voltar() {
    this.router.navigate(['/usuario/'])
  }

}
