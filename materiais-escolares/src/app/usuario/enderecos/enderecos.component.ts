import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit() {
    this.enderecoService.criarEndereco("Felipe", "Jaraguá", "Centro", "Amazonas", 240, "Fundos", 1)
  }

}
