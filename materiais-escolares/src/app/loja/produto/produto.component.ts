import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  codigoProduto = "";
  valorProduto = "";
  produto;
  enderecos;
  primeiroEndereco;
  pais; 
  estado;
  diasEntrega;
  frete;

  constructor(private Router: Router, private route: ActivatedRoute, private enderecoService: EnderecoService) {
    this.codigoProduto = route.snapshot.paramMap.get('codigo')
  }

  ngOnInit() {
    var self = this;
    this.diasEntrega = this.getRandomIntInclusive(1, 30);
    this.frete = ((this.diasEntrega * 2.38).toFixed(2)).toString();
    let freteNovo = this.frete.replace('.', ',')
    this.frete = "R$ " + freteNovo;
    fetch('/api/buscar_produto_especifico', {
      method: 'POST', body: JSON.stringify(
        {
          codigo: this.codigoProduto
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (result) {
      result.json().then(function (data2) {
        data2.forEach(e => {
          self.produto = e;
          let preco = (e.VALOR).toString();
          let precoNovo = preco.replace('.', ',')
          self.valorProduto = "R$ " + precoNovo
        });
        self.criarPagina();
      })
    })
    this.enderecoService.buscarEndereco(localStorage.getItem('codigo')).then(function (result) {
      self.enderecos = result;
      self.guardarEndereco(result);
    })

  }

  inicio() {
    this.Router.navigate([''])
  }

  guardarEndereco(result) {
    var self = this;
    let contagem = 0;
    result.forEach(e => {
      if(contagem == 0) {
        self.primeiroEndereco = e;
        contagem++;
      }
    });
    this.buscarPais();
  }

  buscarPais() {
    var self = this;
    fetch('/api/buscar_pais', {
      method: 'POST', body: JSON.stringify(
        {
          codigoEndereco: this.primeiroEndereco.CODIGO
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (result) {
      result.json().then(function (data2) {
        data2.forEach(e => {
          self.pais = e.NOME
        });
      })
    })
    
  }

  criarPagina() {

  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
