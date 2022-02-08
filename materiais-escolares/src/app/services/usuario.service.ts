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

}
