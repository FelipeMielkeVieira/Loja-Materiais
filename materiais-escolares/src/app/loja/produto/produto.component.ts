import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  codigoProduto = "";

  constructor(private Router: Router, private route: ActivatedRoute) {
    this.codigoProduto = route.snapshot.paramMap.get('codigo')
  }

  ngOnInit() {
    
  }

}
