import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValesService } from 'src/app/services/vales.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router, private valesService: ValesService) { }

  usuario = localStorage.getItem('nome')
  botaoCategoria

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

      result.json().then(function (data) {

        if (data.length < 1) {
          fetch('/api/adicionar_automatico', { method: 'POST' });
        }
      })

    }).then(function () {
      self.colocarMateriais()
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

          self.botaoCategoria = document.createElement('button');
          self.botaoCategoria.innerText = e.NOME
          self.botaoCategoria.className = 'botaoCategoria'
          self.botaoCategoria.onclick = self.filtrarCategoria(e.CODIGO);

          header.appendChild(self.botaoCategoria)
        })
      })
    })
  }

  colocarMateriais() {

    let divDireita = document.querySelector('.divDireita')

    fetch('/api/buscar_produto', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {

        data.forEach(e => {

          console.log(e)
          let divLivro = document.createElement('div')
          divLivro.className = 'divLivro'

          divLivro.innerText = e.CODIGO

          divDireita.appendChild(divLivro)
        });
      })

    })
  }

  filtrarCategoria(categoria) {

  }

}
