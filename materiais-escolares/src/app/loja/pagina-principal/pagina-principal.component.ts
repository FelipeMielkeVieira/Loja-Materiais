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

  usuario = localStorage.getItem('nome')
  botaoCategoria
  listaProdutos = []
  listaCategorias = []

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

    fetch('/api/buscar_produto', { method: 'POST' }).then(function (result) {

      result.json().then(function (data2) {

        console.log('NgOninit1: ', data2)
        if (data2.length < 1) {
          fetch('/api/adicionar_automatico', { method: 'POST' });
        }

        self.listaProdutos = data2;
        self.colocarMateriais(data2)
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
    }).then(function () {
      self.header();
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

  header() {

    let header = document.querySelector('.header2')
    var self = this;

    fetch('/api/buscar_categorias', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {
        data.forEach(function (e) {

          let codigo = e.CODIGO
          self.botaoCategoria = document.createElement('button');
          self.botaoCategoria.innerText = e.NOME
          self.botaoCategoria.className = 'botaoCategoria'
          self.botaoCategoria.onclick = function(a) {
            self.filtrar(2, codigo);
          }

          header.appendChild(self.botaoCategoria)
        })
      })
    })
  }

  colocarMateriais(data) {

    let divDireita = document.querySelector('.divDireita')
    let contagem = 0;
    var self = this;
    let linhaAtual

    let divAtual = document.getElementById('divProdutos')
    if (divAtual) {
      divAtual.remove();
    }

    let divProdutos = document.createElement('div')
    divProdutos.className = 'divDireita'
    divProdutos.id = 'divProdutos'
    divDireita.appendChild(divProdutos)

    data.forEach(e => {

      console.log(e.IMAGEM_NOME)

      if (contagem == 0) {
        linhaAtual = document.createElement('div')
        linhaAtual.className = 'linha'

        divProdutos.appendChild(linhaAtual)
        contagem = 1;
      } else {
        linhaAtual = document.querySelector('.linha')
        contagem = 0;
      }

      let divProduto = document.createElement('div')
      divProduto.className = 'divProduto'

      let imagem = document.createElement('img')
      imagem.src = e.IMAGEM_NOME
      imagem.className = 'imagensProduto'
      divProduto.appendChild(imagem)

      let nomeProduto = document.createElement('div')
      nomeProduto.innerText = e.NOME
      nomeProduto.style.marginBottom = '12px'
      divProduto.appendChild(nomeProduto)

      let marcaProduto = document.createElement('span')
      marcaProduto.innerText = e.MARCA
      marcaProduto.style.width = '100%'
      marcaProduto.style.color = 'gray'
      divProduto.appendChild(marcaProduto)

      let precoProduto = document.createElement('div')
      let preco = (e.VALOR).toString();
      let precoNovo = preco.replace('.', ',')
      precoProduto.innerText = "R$ " + precoNovo
      precoProduto.style.width = '100%'
      precoProduto.style.fontSize = '22px'
      divProduto.appendChild(precoProduto)

      divProduto.onclick = function () {
        self.router.navigate(['/produtos/' + e.CODIGO])
      }

      linhaAtual.className = 'linha'
      linhaAtual.appendChild(divProduto)
    });

    if (contagem == 1) {
      let divProduto = document.createElement('div')
      divProduto.className = 'divProduto2'
      linhaAtual.appendChild(divProduto)
    }
  }

  layout1() {
    let imgLayout1 = document.getElementById('layout1');
    let imgLayout2 = document.getElementById('layout2');

    imgLayout1.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmYzRhMWEiPjxwYXRoIGQ9Ik0xNjUuMTIsNjEuOTJ2LTM0LjRjMCwtMS44OTg4OCAtMS41NDExMiwtMy40NCAtMy40NCwtMy40NGgtMTUxLjM2Yy0xLjg5ODg4LDAgLTMuNDQsMS41NDExMiAtMy40NCwzLjQ0djM0LjR6TTYuODgsNjguOGgxNTguMjR2MzAuOTZoLTE1OC4yNHpNNi44OCwxMDYuNjR2MzQuNGMwLDEuODk4ODggMS41NDExMiwzLjQ0IDMuNDQsMy40NGgxNTEuMzZjMS44OTg4OCwwIDMuNDQsLTEuNTQxMTIgMy40NCwtMy40NHYtMzQuNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')
    imgLayout2.setAttribute('src', 'https://i.ibb.co/jMhS3HY/icons8-dados-de-sa-de-30-1.png')
  }

  layout2() {
    let imgLayout1 = document.querySelector('#layout1');
    let imgLayout2 = document.querySelector('#layout2');

    imgLayout1.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmYzRhMWEiPjxwYXRoIGQ9Ik0xMC4zMiwyNC4wOGMtMS44OTk3OCwwLjAwMDE5IC0zLjQzOTgxLDEuNTQwMjIgLTMuNDQsMy40NHYxMTMuNTJjMC4wMDAxOSwxLjg5OTc4IDEuNTQwMjIsMy40Mzk4MSAzLjQ0LDMuNDRoMTUxLjM2YzEuODk5NzgsLTAuMDAwMTkgMy40Mzk4MSwtMS41NDAyMiAzLjQ0LC0zLjQ0di0xMTMuNTJjLTAuMDAwMTksLTEuODk5NzggLTEuNTQwMjIsLTMuNDM5ODEgLTMuNDQsLTMuNDR6TTEzLjc2LDMwLjk2aDE0NC40OHYzMC45NmgtMTQ0LjQ4ek0xMy43Niw2OC44aDE0NC40OHYzMC45NmgtMTQ0LjQ4ek0xMy43NiwxMDYuNjRoMTQ0LjQ4djMwLjk2aC0xNDQuNDh6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')
    imgLayout2.setAttribute('src', 'https://i.ibb.co/cgNXRrh/icons8-dados-de-sa-de-30.png')
  }

  filtrar(tipo, valor) {

    console.log(valor)
    if (tipo == 1) {

      const listaFiltrada = this.listaProdutos.filter(function (a) {

        return a.NOME.toLowerCase().indexOf(valor.toLowerCase()) > -1
      });

      this.colocarMateriais(listaFiltrada);
    }

    if (tipo == 2) {
      console.log(valor)
      const listaFiltrada = this.listaProdutos.filter(function (a) {

        if(a.CATEGORIA == valor) {
          return a;
        }
      });

      this.colocarMateriais(listaFiltrada)
    }
  }

}
