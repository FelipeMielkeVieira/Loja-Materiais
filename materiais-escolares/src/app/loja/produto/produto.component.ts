import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  codigoProduto = "";
  valorProduto = "";
  produto;

  constructor(private Router: Router, private route: ActivatedRoute) {
    this.codigoProduto = route.snapshot.paramMap.get('codigo')
  }

  ngOnInit() {
    var self = this;
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
          let preco = (e.VALOR).toString();
        let precoNovo = preco.replace('.', ',')
        self.valorProduto = "R$ " + precoNovo
        });
        self.criarPagina();
      })
    })
  }

  inicio() {
    this.Router.navigate([''])
  }

  criarPagina() {

  }

}
