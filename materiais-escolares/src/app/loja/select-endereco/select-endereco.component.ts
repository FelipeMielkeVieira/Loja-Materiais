import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../../services/endereco.service'

@Component({
  selector: 'app-select-endereco',
  templateUrl: './select-endereco.component.html',
  styleUrls: ['./select-endereco.component.css']
})
export class SelectEnderecoComponent implements OnInit {

  constructor(private router: Router, private enderecoService: EnderecoService) { }
  listaEnderecos;

  ngOnInit() {
    var self = this;

    this.enderecoService.buscarEnderecoCompleto(localStorage.getItem('codigo')).then(function (result) {
      self.listaEnderecos = result
    })
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

  voltar() {
    this.router.navigate([localStorage.getItem('path')])
  }

  selecionar(codigo) {
    localStorage.setItem('enderecoAtual', codigo)
    this.router.navigate([localStorage.getItem('path')])
  }

  novo() {
    this.router.navigate(['/usuario/enderecos/' + 0])
  }
}
