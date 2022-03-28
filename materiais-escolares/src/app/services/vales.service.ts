import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValesService {

  constructor() { }

  resgatarVale(codigo) {

    fetch('/api/buscar_vale', {
      method: 'POST',
      body: JSON.stringify(
        {
          codigo: codigo
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (e) {
      e.json().then(function (data) {

        if (!data.USADO) {
          fetch('/api/resgatar_vale', {
            method: 'POST',
            body: JSON.stringify(
              {
                codigo: codigo
              }
            ),
            headers: { "Content-Type": "applicattion/json" }
          }).then(function (a) {
            console.log('Vale Resgatado!')
            localStorage.setItem('desconto', (localStorage.getItem('desconto') + data.DESCONTO))
          })
        } else {
          console.log('Código Inválido!')
          alert("Código Inválido!")
        }
      })
    })
  }

  adicionarValesAutomatico() {

    fetch('/api/adicionar_vales', {
      method: 'POST',
      headers: { "Content-Type": "applicattion/json" }
    }).then(function (a) {

    })
  }
}
