import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (location.pathname == '/carrinho' || location.pathname == '/carrinho/pedido' || location.pathname == '/carrinho/pedido' || location.pathname == '/usuario') {

            let contagem = 0
            var self = this
            
            fetch('/api/buscar_usuario', { method: 'POST' }).then(function (result) {

                result.json().then(function (data) {

                    data.forEach(e => {

                        if (localStorage.getItem('nome') == e.NOME && localStorage.getItem('senha') == e.SENHA) {
                            contagem = contagem + 1
                        }
                    });

                    if (contagem > 0) {
                        return true;
                    } else {
                        let caminho = localStorage.getItem('path')
                        self.router.navigate([caminho])
                    }
                })

            })

        }

        return true;
    }
}

export default CheckLogged;