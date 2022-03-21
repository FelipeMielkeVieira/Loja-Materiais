import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  criarEndereco(cidade, bairro, rua, numero, complemento, estado, codigo) {

    return new Promise((resolvido, rejeitado) => {

      fetch('/api/adicionar_endereco', {
        method: 'POST',
        body: JSON.stringify(
          {
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            complemento: complemento,
            usuario: codigo,
            estado: estado
          }
        ),
        headers: { "Content-Type": "application/json" }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarEndereco(codigo) {

    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_enderecos', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo: codigo
          }
        ),
        headers: { "Content-Type": "application/json" }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarPaises() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_paises', {
        method: 'POST',
        headers: { "Content-Type": "application/json" }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarEstados(codigo) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_estados', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo: codigo
          }
        ),
        headers: { "Content-Type": "application/json" }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}

