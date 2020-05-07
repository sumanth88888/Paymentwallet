import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Account } from '../account';

@Component({
  selector: 'app-view-account-summary',
  templateUrl: './view-account-summary.component.html',
  styleUrls: ['./view-account-summary.component.css']
})
export class ViewAccountSummaryComponent implements OnInit {

  account:any;
  errorMsg:string;
constructor(private walletService:WalletService){ }

ngOnInit(){
  this.errorMsg="";
   let token = localStorage.getItem("token");
  if(token != null){
    let walletId =this.walletService.decrypt(token.split("-")[0]);
    
   this.walletService.viewAccount(walletId).subscribe(data=>{this.account=data;console.log(data)});
}else this.errorMsg="You are Not Authenticated";
}

}
