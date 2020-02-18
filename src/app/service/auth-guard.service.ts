import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { UrlService } from "./url.service";

@Injectable({
  providedIn: "root"
})
export class LoginAuthGuardService implements CanActivate {
  constructor(private authServ: AuthService, private router: Router) {}

  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    if (!this.authServ.isUserLogged()) {
      return true;
    } else {
      this.router.navigateByUrl(UrlService.SE_DASHBOARD);
    }
    // return true;
  }
}

@Injectable({
  providedIn: "root"
})
export class SeDashboardAuthGuardService implements CanActivate {
  constructor(private authServ: AuthService, private router: Router) {}

  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    if (this.authServ.isUserLogged()) {
      return true;
    } else {
      this.router.navigateByUrl(UrlService.LOGIN);
    }
    // return true;
  }
}
