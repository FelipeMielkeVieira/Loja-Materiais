import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  criarEndereco(nome, cidade, bairro, rua, numero, complemento, estado) {

    return new Promise((resolvido, rejeitado) => {

      fetch('/api/coletar_codigo', {
        method: 'POST',
        body: JSON.stringify(
          {
            nome: nome
          }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(result => {

        result.json().then(function (data) {

          var codigo = data.CODIGO

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
            )
          }).then(resultado => resultado.json())
          .then(resolvido)
          .catch(rejeitado);
        })

      }).catch(erro => {

      });
    })
  }
}

