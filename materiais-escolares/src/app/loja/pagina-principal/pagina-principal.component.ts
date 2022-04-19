import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValesService } from 'src/app/services/vales.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router, private valesService: ValesService) { }

  layout;
  usuario = localStorage.getItem('nome')
  botaoCategoria
  listaProdutosTotais = [];
  listaProdutos = []
  listaCategorias = []
  pesquisaProduto = "";
  categoriaAtiva;
  ordenacao = 1;

  ngOnInit() {
    console.log(location.pathname)
    localStorage.setItem('path', location.pathname)

    var self = this;

    fetch('/api/buscar_paises', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {

        if (data.length < 1) {
          fetch('/api/adicionar_paises', { method: 'POST' });
        }
      })
    })

    fetch('/api/buscar_todos_estados', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {

        if (data.length < 1) {
          fetch('/api/adicionar_estados', { method: 'POST' });
        }
      })
    })

    fetch('/api/buscar_produto', {
      method: 'POST', body: JSON.stringify(
        {
          ordenar: 1
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (result) {

      result.json().then(function (data2) {

        console.log('NgOninit1: ', data2)
        if (data2.length < 1) {
          fetch('/api/adicionar_automatico', { method: 'POST' });
        }

        self.listaProdutosTotais = data2;
        self.listaProdutos = data2;
        self.layout = 2;
      })
    })

    fetch('/api/buscar_todos_vales', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {

        if (data.length < 1) {
          self.valesService.adicionarValesAutomatico();
        }
      })
    })

    fetch('/api/buscar_categorias', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {

        if (data.length < 1) {
          fetch('/api/adicionar_categorias', { method: 'POST' });
        }

        self.listaCategorias = data;
      })
    })
  }

  entrar() {
    this.router.navigate(['usuario/login'])
  }

  cadastrar() {
    this.router.navigate(['usuario/cadastro'])
  }

  carrinho() {
    if (this.usuario != '') {
      this.router.navigate(['carrinho'])
    }
  }

  logout() {
    localStorage.setItem('nome', '')
    localStorage.setItem('senha', '')
    window.location.reload()
  }

  conta() {
    this.router.navigate(['usuario/'])
  }

  pedidos() {
    this.router.navigate(['carrinho/pedidos'])
  }

  categorias(valor) {

    let botao = document.getElementById(valor);

    if (botao.style.backgroundColor == 'rgb(7, 136, 155)') {
      botao.style.backgroundColor = '#66b9bf'
      botao.style.color = 'black';
      this.categoriaAtiva = '';
      this.filtroCategorias(2);
      //desseleciona
    } else {
      for (let i = 1; i < 12; i++) {
        let botaoSelecionado = document.getElementById(i.toString())
        botaoSelecionado.style.backgroundColor = '#66b9bf'
        botaoSelecionado.style.color = 'black'
      }
      botao.style.backgroundColor = '#07889b';
      botao.style.color = 'white'
      this.categoriaAtiva = valor;
      this.filtroCategorias(1);
      //seleciona
    }
  }

  layout1() {
    let imgLayout1 = document.getElementById('layout1');
    let imgLayout2 = document.getElementById('layout2');

    imgLayout1.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmYzRhMWEiPjxwYXRoIGQ9Ik0xNjUuMTIsNjEuOTJ2LTM0LjRjMCwtMS44OTg4OCAtMS41NDExMiwtMy40NCAtMy40NCwtMy40NGgtMTUxLjM2Yy0xLjg5ODg4LDAgLTMuNDQsMS41NDExMiAtMy40NCwzLjQ0djM0LjR6TTYuODgsNjguOGgxNTguMjR2MzAuOTZoLTE1OC4yNHpNNi44OCwxMDYuNjR2MzQuNGMwLDEuODk4ODggMS41NDExMiwzLjQ0IDMuNDQsMy40NGgxNTEuMzZjMS44OTg4OCwwIDMuNDQsLTEuNTQxMTIgMy40NCwtMy40NHYtMzQuNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')
    imgLayout2.setAttribute('src', 'https://i.ibb.co/jMhS3HY/icons8-dados-de-sa-de-30-1.png')
    this.layout = 1;
  }

  layout2() {
    let imgLayout1 = document.querySelector('#layout1');
    let imgLayout2 = document.querySelector('#layout2');

    imgLayout1.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmYzRhMWEiPjxwYXRoIGQ9Ik0xMC4zMiwyNC4wOGMtMS44OTk3OCwwLjAwMDE5IC0zLjQzOTgxLDEuNTQwMjIgLTMuNDQsMy40NHYxMTMuNTJjMC4wMDAxOSwxLjg5OTc4IDEuNTQwMjIsMy40Mzk4MSAzLjQ0LDMuNDRoMTUxLjM2YzEuODk5NzgsLTAuMDAwMTkgMy40Mzk4MSwtMS41NDAyMiAzLjQ0LC0zLjQ0di0xMTMuNTJjLTAuMDAwMTksLTEuODk5NzggLTEuNTQwMjIsLTMuNDM5ODEgLTMuNDQsLTMuNDR6TTEzLjc2LDMwLjk2aDE0NC40OHYzMC45NmgtMTQ0LjQ4ek0xMy43Niw2OC44aDE0NC40OHYzMC45NmgtMTQ0LjQ4ek0xMy43NiwxMDYuNjRoMTQ0LjQ4djMwLjk2aC0xNDQuNDh6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')
    imgLayout2.setAttribute('src', 'https://i.ibb.co/cgNXRrh/icons8-dados-de-sa-de-30.png')
    this.layout = 2;
  }

  filtroPesquisa(valor) {

    if (valor != '') {
      const listaFiltrada = this.listaProdutos.filter(function (a) {
        return a.NOME.toLowerCase().indexOf(valor.toLowerCase()) > -1
      });
      this.listaProdutos = listaFiltrada;
    } else {
      if(this.categoriaAtiva == '') {
        this.listaProdutos = this.listaProdutosTotais
      } else {
        const listaFiltrada = this.listaProdutos.filter(function (a) {
          return a.NOME.toLowerCase().indexOf(valor.toLowerCase()) > -1
        });
        this.listaProdutos = listaFiltrada;
      }
    }
    this.ordenar();
  }

  filtroCategorias(opcao) {

    var self = this;
    let listaTemp = [];

    if (opcao == 1) {
      this.listaProdutosTotais.forEach(function (e) {
        if (e.CATEGORIA == self.categoriaAtiva) {
          listaTemp.push(e);
        }
      })
    } else {
      this.listaProdutosTotais.forEach(function (e) {
        listaTemp.push(e);
      })
    }

    this.listaProdutos = listaTemp;
    this.ordenar();
  }

  ordenar() {
    var self = this;
    fetch('/api/buscar_produto', {
      method: 'POST', body: JSON.stringify(
        {
          ordenar: self.ordenacao
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (result) {

      result.json().then(function (data2) {

        if (data2.length < 1) {
          fetch('/api/adicionar_automatico', { method: 'POST' });
        }

        let listaTemp = []
        console.log(data2)
        data2.forEach(function (b) {
          self.listaProdutos.forEach(function (e) {
            if (e.CODIGO == b.CODIGO) {
              listaTemp.push(e);
            }
          })
        })
        console.log(listaTemp)
        self.listaProdutos = listaTemp;
      })
    })
  }

  getPreco(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  redirecionarProduto(codigo) {
    this.router.navigate(['/produtos/' + codigo])
  }
}
