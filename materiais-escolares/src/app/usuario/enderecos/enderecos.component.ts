import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {

  constructor(private enderecoService: EnderecoService, private router: Router) { }

  ngOnInit() {
    var self = this;

    this.enderecoService.buscarEndereco(localStorage.getItem('codigo')).then(function (result) {
      self.listarEnderecos(result);
    })
  }

  listarEnderecos(result) {
    
    result.forEach(e => {
      console.log(e)
    });
  }

  adicionarEndereco() {
    this.router.navigate(['/usuario/enderecos/' + 0])
  }

}
