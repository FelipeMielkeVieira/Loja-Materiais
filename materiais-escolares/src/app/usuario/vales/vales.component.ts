import { Component, OnInit } from '@angular/core';
import { ValesService } from 'src/app/services/vales.service';

@Component({
  selector: 'app-vales',
  templateUrl: './vales.component.html',
  styleUrls: ['./vales.component.css']
})
export class ValesComponent implements OnInit {

  constructor(private valesService: ValesService) { }

  vale = "";

  ngOnInit() {
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

        if (!data.USADO) {
          fetch('/api/resgatar_vale', {
            method: 'POST',
            body: JSON.stringify(
              {
                codigo: self.vale
              }
            ),
            headers: { "Content-Type": "application/json" }
          }).then(function (a) {
            console.log('Vale Resgatado!')
            localStorage.setItem('desconto', (localStorage.getItem('desconto') + data.DESCONTO))
          })
        } else {
          alert("Código Inválido!")
        }
      })
    })
  }
}
