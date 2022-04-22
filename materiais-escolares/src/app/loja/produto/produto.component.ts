import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  nomeUser;
  codigoProduto = "";
  valorProduto = "";
  avaliacoes = [];
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
    quantidade: 0,
    frete: 0
  }
  enderecos;
  primeiroEndereco;
  enderecoCodigo;
  pais;
  estado;
  diasEntrega;
  frete;
  quantidade = 1;
  especificacoes;
  listaProdutos;
  possuiNoCarrinho = false;

  nota = 1;
  textoAvaliacao = "";

  constructor(private router: Router, private route: ActivatedRoute, private enderecoService: EnderecoService) {
    this.codigoProduto = route.snapshot.paramMap.get('codigo')
  }

  ngOnInit() {

    if (!localStorage.getItem('enderecoAtual')) {
      localStorage.setItem('enderecoAtual', '1')
    } else {
      this.enderecoCodigo = localStorage.getItem('enderecoAtual')
    }

    this.nomeUser = localStorage.getItem('nome')
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

      fetch('/api/buscar_avaliacoes', {
        method: 'POST', body: JSON.stringify(
          {
            produto: self.codigoProduto
          }
        ),
        headers: { "Content-Type": "application/json" }
      }).then(function (result) {
        result.json().then(function (data) {
          self.avaliacoes = data;
          console.log(data)
        })
      })
    })

    if (localStorage.getItem('codigo') && localStorage.getItem('codigo') != '') {
      this.enderecoService.buscarEnderecoUser(localStorage.getItem('codigo')).then(function (result: any) {
        if (result.length > 0) {
          if (!self.enderecoCodigo) {
            self.enderecos = result;
            self.guardarEndereco(result);
          } else {
            self.pegarEndereco();
          }
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
    this.router.navigate([''])
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

  pegarEndereco() {
    var self = this;
    this.enderecoService.buscarEndereco2(this.enderecoCodigo).then(function (result: any) {
      console.log(result);
      self.enderecos = result;
      self.guardarEndereco(result);
    })
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
      this.produto.frete = this.diasEntrega;
      carrinhoAtual.push(this.produto)
      localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
      this.router.navigate(['/carrinho'])

    } else {
      this.router.navigate(['/usuario/login'])
    }
  }

  getPreco(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  produtoRota(codigo) {
    var self = this;
    console.log(codigo)
    this.router.navigate([('/produtos/' + codigo)])
    this.codigoProduto = codigo
    this.ngOnInit();
    window.scrollTo(0, 0);
  }

  selecionaEndereco() {
    this.router.navigate(['/produtos/endereco'])
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

  adicionarAvaliacao() {
    var self = this;
    fetch('/api/adicionar_avaliacao', {
      method: 'POST', body: JSON.stringify(
        {
          texto: this.textoAvaliacao,
          user: localStorage.getItem('nome'),
          data: new Date(),
          nota: this.nota,
          produto: this.codigoProduto
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function () {
      self.textoAvaliacao = "";
      fetch('/api/buscar_avaliacoes', {
        method: 'POST', body: JSON.stringify(
          {
            produto: self.codigoProduto
          }
        ),
        headers: { "Content-Type": "application/json" }
      }).then(function (result) {
        result.json().then(function (data) {
          self.avaliacoes = data;
          console.log(self.avaliacoes)
        })
      })
    })
  }

  excluirAvaliacao(index, codigo) {
    this.avaliacoes.splice(index, 1);
    fetch('/api/excluir_avaliacao', {
      method: 'POST', body: JSON.stringify({
        codigo: codigo
      }),
      headers: { "Content-Type": "application/json" }
    })
  }
}
