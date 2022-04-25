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

  listaEnderecos

  ngOnInit() {
    var self = this;
    localStorage.setItem('path', window.location.pathname)
    this.enderecoService.buscarEnderecoCompleto(localStorage.getItem('codigo')).then(function (result) {
      self.listaEnderecos = result
      if(!localStorage.getItem('enderecoAtual')) {
        localStorage.setItem('enderecoAtual', result[0].CODIGO);
      }
    })
  }

  excluir(index, codigo) {
    this.listaEnderecos.splice(index, 1);
    fetch('/api/excluir_endereco', {
      method: 'POST', body: JSON.stringify({
        codigo: codigo
      }),
      headers: { "Content-Type": "application/json" }
    })
  }

  editar(codigo) {
    this.router.navigate(['/usuario/enderecos', codigo])
  }

  adicionarEndereco() {
    this.router.navigate(['/usuario/enderecos/' + 0])
  }

  voltar() {
    if(localStorage.getItem('emCompra') == '1') {
      this.router.navigate(['/carrinho/pedido']);
    } else {
      this.router.navigate(['/usuario/'])
    }
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

}
