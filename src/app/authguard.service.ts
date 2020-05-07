import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private walletService:WalletService, private route:Router) { }
  
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let token = localStorage.getItem("token");
    if(localStorage.getItem("token")!=null){
      let walletId = this.walletService.decrypt(token.split('-')[0]);
      let password = this.walletService.decrypt(token.split('-')[2]);
      if(walletId !=null && password!=null){
        return true;
      }
    }else{
      this.route.navigateByUrl("/error");
      return false;
    }
  }
}
