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
    let linhaAtual = document.createElement('div')
    linhaAtual.className = 'linhaEnderecos'
    let divEnderecos = document.querySelector('.enderecos')
    divEnderecos.appendChild(linhaAtual)

    result.forEach(e => {
      let divEndereco = document.createElement('div')
      linhaAtual.appendChild(divEndereco)
      divEndereco.className = 'divEndereco'

      let pais = document.createElement('div')
      pais.className = 'divPais'
      pais.innerText = e.PAIS
      linhaAtual.appendChild(pais)
    });
  }

  adicionarEndereco() {
    this.router.navigate(['/usuario/enderecos/' + 0])
  }

  voltar() {
    this.router.navigate(['/usuario/'])
  }

}
