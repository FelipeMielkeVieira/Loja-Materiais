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
        data.forEach(element => {
          console.log(element)
          if (element.USADO == 0) {
            fetch('/api/resgatar_vale', {
              method: 'POST',
              body: JSON.stringify(
                {
                  codigo: self.vale
                }
              ),
              headers: { "Content-Type": "application/json" }
            }).then(function () {
              alert('Vale Resgatado!')
              if (localStorage.getItem('desconto')) {
                localStorage.setItem('desconto', ((localStorage.getItem('desconto') + element.DESCONTO).toString()))
              } else {
                localStorage.setItem('desconto', (element.DESCONTO).toString())
              }
            })
          } else {
            alert("Código Inválido!")
          }
        });
      })
    })
  }

  cancelar() {
    this.router.navigate(['/usuario/'])
  }
}
