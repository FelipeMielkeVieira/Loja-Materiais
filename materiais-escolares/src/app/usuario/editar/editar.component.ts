import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService) {
    this.valorEditar = route.snapshot.paramMap.get('editor');
    this.valorEditar = this.valorEditar.charAt(0).toUpperCase() + this.valorEditar.slice(1);
  }

  valorEditar = "";
  novoValor = "";

  ngOnInit() {
  }

  conta() {
    this.router.navigate(['/usuario'])
  }

  informacoes() {
    this.router.navigate(['/usuario/info'])
  }

  salvar() {

    if(this.novoValor != "") {

      // if(this.valorEditar == "Nome") {
      //   this.usuarioService.editarUsuario(this.valorEditar, this.novoValor, localStorage.getItem('nome'))
      // }

      this.usuarioService.editarUsuario(this.valorEditar, this.novoValor, localStorage.getItem('nome'))

      if(this.valorEditar == "Nome") {
        localStorage.setItem('nome', this.novoValor)
      }

      this.informacoes();

    } else {
      alert("")
    }
  }

}
