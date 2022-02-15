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

            if(localStorage.getItem('nome') != '' && localStorage.getItem('nome') != null) {
                return true;
            } else {
                let caminho = localStorage.getItem('path')
                this.router.navigate([caminho])
            }

        }

        return true;
    }
}

export default CheckLogged;