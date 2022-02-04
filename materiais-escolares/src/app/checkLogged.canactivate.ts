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

        if(location.pathname != '/' && location.pathname != '/usuario/cadastro' && location.pathname != '/usuario/login') {
            if(localStorage.getItem('usuario') == '' || localStorage.getItem('usuario') == undefined) {
                let caminho = localStorage.getItem('path')
                this.router.navigate([caminho])
            }
        }

        localStorage.setItem('path', location.pathname)

        return true;
    }
}

export default CheckLogged;