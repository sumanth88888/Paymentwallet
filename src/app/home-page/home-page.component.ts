import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  walletId: string;
  
  constructor(private walletService: WalletService,private route:Router) { }

  ngOnInit() {
  }

  show(){
    let token = localStorage.getItem("token");
    if(token!=null){
      this.walletId = this.walletService.decrypt(token.split("-")[0]);
    }
    this.route.navigateByUrl("/showbalance/"+this.walletId);
  }

  


}
