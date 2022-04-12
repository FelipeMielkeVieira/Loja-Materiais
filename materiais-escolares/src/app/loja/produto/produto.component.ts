import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  codigoUser;
  codigoProduto = "";
  valorProduto = "";
  produto = {
    CODIGO: 0,
    NOME: "",
    DESCRICAO: "",
    ESPECIFICACOES: "",
    IMAGEM_NOME: "",
    VALOR: 0,
    AVALIACOES: 0,
    ESTRELAS: 0,
    MARCA: "",
    CATEGORIA: 0,
    quantidade: 0
  }
  enderecos;
  primeiroEndereco;
  pais;
  estado;
  diasEntrega;
  frete;
  quantidade = 1;
  especificacoes;
  listaProdutos;
  possuiNoCarrinho = false;

  constructor(private Router: Router, private route: ActivatedRoute, private enderecoService: EnderecoService) {
    this.codigoProduto = route.snapshot.paramMap.get('codigo')
  }

  ngOnInit() {
    localStorage.setItem('path', location.pathname)
    this.codigoUser = localStorage.getItem('codigo')
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
          self.especificacoes = e.ESPECIFICACOES.split("?");
          let preco = (e.VALOR).toString();
          let precoNovo = preco.replace('.', ',')
          self.valorProduto = "R$ " + precoNovo

          let carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
          carrinhoAtual.forEach(e => {
            if (e.CODIGO == self.produto.CODIGO) {
              self.possuiNoCarrinho = true;
            }
          });
        });
      })
    })

    if (localStorage.getItem('codigo') && localStorage.getItem('codigo') != '') {
      this.enderecoService.buscarEndereco(localStorage.getItem('codigo')).then(function (result: any) {
        if (result.length > 0) {
          self.enderecos = result;
          self.guardarEndereco(result);
        }
      })
    }

    fetch('/api/buscar_produto', {
      method: 'POST', body: JSON.stringify(
        {
          ordenar: 7
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (result) {

      result.json().then(function (data2) {

        if (data2.length < 1) {
          fetch('/api/adicionar_automatico', { method: 'POST' });
        }
        self.listaProdutos = data2;
      })
    })
  }

  inicio() {
    this.Router.navigate([''])
  }

  guardarEndereco(result) {
    var self = this;
    let contagem = 0;
    result.forEach(e => {
      if (contagem == 0) {
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
          codigoEndereco: self.primeiroEndereco.CODIGO
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

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  adicionarCarrinho() {
    if (this.codigoUser && this.codigoUser != '') {


      let carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
      this.produto.quantidade = this.quantidade;
      carrinhoAtual.push(this.produto)
      localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
      this.Router.navigate(['/carrinho'])

    } else {
      this.Router.navigate(['/usuario/login'])
    }
  }

  getPreco(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

}
