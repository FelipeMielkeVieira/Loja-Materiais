import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private router: Router, private enderecoService: EnderecoService) { }

  carrinho = [];
  codigoEndereco;
  frete = 0;
  freteDias = 0;
  data_entrega = new Date();
  desconto = 0;
  endereco = {
    BAIRRO: "",
    CIDADE: "",
    RUA: "",
    NUMERO: 0,
    PAIS: "",
    ESTADO: ""
  };
  valor = 0.00;
  pagamento = {
    TITULAR: "",
    NUMERO: 0
  };
  contagemPedidos = 0;

  ngOnInit() {
    var self = this;

    localStorage.setItem('emCompra', '1');
    this.codigoEndereco = localStorage.getItem('enderecoAtual');

    let varEndereco = 0;
    this.enderecoService.buscarEnderecoCompleto(localStorage.getItem('codigo')).then(function (result: any) {
      result.forEach(function (e) {
        if(e.CODIGO == parseInt(localStorage.getItem('enderecoAtual'))) {
          varEndereco++;
        }
      })
      if(varEndereco == 0) {
        this.codigoEndereco = 0;
      }
    })

    this.contarPedidos();
    this.desconto = parseInt(localStorage.getItem('desconto'))

    fetch('/api/buscar_endereco_completo', {
      method: 'POST', body: JSON.stringify(
        {
          codigo: this.codigoEndereco
        }
      ),
      headers: { "Content-Type": "application/json" }
    }).then(function (result) {
      result.json().then(function (data) {
        self.endereco = data[0]
      })
    })

    localStorage.setItem('path', location.pathname)
    this.carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    this.carrinho.forEach(function (e) {
      self.valor += e.VALOR * e.quantidade
      self.freteDias += e.frete
      self.frete += e.frete * 1.38
    })
    self.valor -= this.desconto;
    self.valor += this.frete;
    this.calcularData();

    if (!localStorage.getItem('pagamento')) {
      localStorage.setItem('pagamento', '1')
    }

    fetch('/api/buscar_pagamentos', { method: 'POST', body: JSON.stringify({ codigo: localStorage.getItem('codigo') }), headers: { "Content-Type": "application/json" } }).then(function (e) {
      e.json().then(function (data) {
        if(data.length != 0) {
          data.forEach(function (e) {
            if (e.CODIGO == localStorage.getItem('pagamento')) {
              self.pagamento = e;
            }
          })
        } else {
          self.pagamento = null;
        }
      })
    })
  }

  getPreco(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  filtroPesquisa(valor) {
    localStorage.setItem('pesquisa', valor);
    this.router.navigate([''])
  }

  selecao() {
    this.router.navigate(['/produtos/endereco'])
  }

  editarNumero(numero) {
    let numero1 = this.setCharAt(numero, 4, "*");
    let numero2 = this.setCharAt(numero1, 5, "*");
    let numero3 = this.setCharAt(numero2, 6, "*");
    let numero4 = this.setCharAt(numero3, 7, "*");
    let numero5 = this.setCharAt(numero4, 8, "*");
    let numero6 = this.setCharAt(numero5, 9, "*");
    let numero7 = this.setCharAt(numero6, 10, "*");
    let numero8 = this.setCharAt(numero7, 11, "*");
    return numero8;
  }

  setCharAt(str: String, index: number, chr: String) {
    if (index > str.length - 1) return str;
    str = str.toString();
    let numeroFinal = str.substring(0, index) + chr + str.substring(index + 1);
    return numeroFinal
  }

  selecaoPagamento() {
    this.router.navigate(['/carrinho/pagamento'])
  }

  contarPedidos() {
    var self = this;
    fetch('/api/buscar_todos_pedidos', { method: 'POST', headers: { "Content-Type": "application/json" }}).then(function (data) {
      data.json().then(function (result) {
        result.forEach(function (e) {
          self.contagemPedidos++;
        })
      })
    })
  }

  fazerPedido() {
    var self = this;
    localStorage.setItem('emCompra', undefined);
    fetch('/api/adicionar_pedido', {
      method: 'POST', body: JSON.stringify(
        {
          data: new Date(),
          data_entrega: this.data_entrega,
          valor: self.valor,
          user: localStorage.getItem('codigo')
        }
      ), headers: { "Content-Type": "application/json" }
    }).then(function () {
      self.carrinho.forEach(function (a) {
        fetch('/api/adicionar_venda', {
          method: 'POST', body: JSON.stringify(
            {
              pedido: (self.contagemPedidos + 1),
              produto: a.CODIGO,
              quantidade: a.quantidade
            }
          ), headers: { "Content-Type": "application/json" }
        })
      })
      self.alerta("Compra Efetuada!")
    })
  }

  alerta(texto) {

    var self = this;
    let alertAtual = document.querySelector('.alert')
    if (alertAtual) {
      alertAtual.remove()
    }

    let alert = document.createElement('div')
    alert.className = 'alert2'

    alert.innerText = texto

    document.body.appendChild(alert)

    setTimeout(function () {
      document.body.removeChild(alert)
      self.router.navigate(['/'])
      localStorage.setItem('carrinho', JSON.stringify([]));
    }, 3000)
  }

  calcularData() {
    let dataAtual = new Date();

    let diaAtual = dataAtual.getDate();
    let mesAtual = dataAtual.getMonth() + 1;
    let anoAtual = dataAtual.getFullYear();

    let dia = diaAtual + this.freteDias;
    let mes = mesAtual;
    let ano = anoAtual;
    if(dia > 30) {
      dia = dia - 30;
      mes++;
    }
    if(mes > 12) {
      mes = mes - 12;
      ano++;
    }

    mes = mes - 1;
    this.data_entrega = new Date(ano, mes, dia)
  }

  enderecosDirecionar() {
    this.router.navigate(['/usuario/enderecos']);
  }

  pagamentosDirecionar() {
    this.router.navigate(['/usuario/pagamentos'])
  }

}
