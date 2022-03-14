import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuario() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  usuarioEspecifico(nome) {

    return new Promise((resolvido, rejeitado) => {

      fetch('/api/usuario_especifico', {
        method: 'POST',
        body: JSON.stringify(
          {
          nome: nome
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  excluirUsuario(nome) {

    return new Promise((resolvido, rejeitado) => {

      fetch('/api/excluir_usuario', {
        method: 'POST',
        body: JSON.stringify(
          {
          nome: nome
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  editarUsuario(valorEditar, novoValor, nome) {

    return new Promise((resolvido, rejeitado) => {

      fetch('/api/editar_usuario', {
        method: 'POST',
        body: JSON.stringify(
          {
          valorEditar: (valorEditar.toUpperCase()),
          novoValor: novoValor,
          nome: nome
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }
}
