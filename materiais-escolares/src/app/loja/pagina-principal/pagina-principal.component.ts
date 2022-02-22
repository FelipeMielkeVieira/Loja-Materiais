import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  usuario = localStorage.getItem('nome')

  ngOnInit() {
    console.log(location.pathname)
    localStorage.setItem('path', location.pathname)

    fetch('/api/buscar_produto', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {

        if(data.length < 1) {
          fetch('/api/adicionar_automatico', { method: 'POST' });
        }
      })

    }).then (function (e) {
      this.colocarMateriais()
    })
  }

  entrar() {
    this.router.navigate(['usuario/login'])
  }

  cadastrar() {
    this.router.navigate(['usuario/cadastro'])
  }

  carrinho() {
    if(this.usuario != '') {
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

}
