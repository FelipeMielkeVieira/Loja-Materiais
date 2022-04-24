import { Component, OnInit } from '@angular/core';
import { ValesService } from 'src/app/services/vales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vales',
  templateUrl: './vales.component.html',
  styleUrls: ['./vales.component.css']
})
export class ValesComponent implements OnInit {

  constructor(private valesService: ValesService, private router: Router) { }

  vale = "";

  ngOnInit() {
    localStorage.setItem('desconto', "0")
  }

  resgatar() {

    var self = this;

    fetch('/api/buscar_vale', {
      method: 'POST',
      body: JSON.stringify(
        {
          codigo: this.vale
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (e) {
      e.json().then(function (data) {
        if(data.length == 0) {
          self.alerta("Código Inválido!")
        }
        data.forEach(element => {
          if (element.USADO == 0) {
            fetch('/api/resgatar_vale', {
              method: 'POST',
              body: JSON.stringify(
                {
                  codigo: self.vale
                }
              ),
              headers: { "Content-Type": "application/json" }
            })
              if (localStorage.getItem('desconto')) {
                localStorage.setItem('desconto', ((localStorage.getItem('desconto') + element.DESCONTO).toString()))
              } else {
                localStorage.setItem('desconto', (element.DESCONTO).toString())
              }
              self.alerta2("Vale Resgatado com Sucesso!")
          } else {
            self.alerta("Código Inválido!")
          }
        });
      })
    })
  }

  cancelar() {
    this.router.navigate(['/usuario/'])
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

  alerta(texto) {

    let alertAtual = document.querySelector('.alert2')
    if (alertAtual) {
      alertAtual.remove()
    }

    let alert = document.createElement('div')
    alert.className = 'alert2'
    alert.style.backgroundColor = 'rgb(235, 49, 49)'

    alert.innerText = texto
    document.body.appendChild(alert)

    setTimeout(function () {
      document.body.removeChild(alert)
    }, 3000)
  }

  alerta2(texto) {

    let alertAtual = document.querySelector('.alert2')
    if (alertAtual) {
      alertAtual.remove()
    }

    let alert = document.createElement('div')
    alert.className = 'alert2'

    alert.innerText = texto
    document.body.appendChild(alert)

    setTimeout(function () {
      document.body.removeChild(alert)
    }, 3000)
  }
}
