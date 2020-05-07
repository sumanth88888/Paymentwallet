import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showbalance',
  templateUrl: './showbalance.component.html',
  styleUrls: ['./showbalance.component.css']
})
export class ShowbalanceComponent implements OnInit {

  walletid:string
  balance:number
  userName:string;
  constructor(private walletService:WalletService, private route:ActivatedRoute) { }

  ngOnInit() {
    let token = localStorage.getItem("token");
    if(token!=null){
      this.walletid = this.walletService.decrypt(token.split('-')[0]);
      this.userName = this.walletService.decrypt(token.split('-')[1]);
    }
    this.walletService.showBalance(this.walletid).subscribe(data=>{this.balance=data;console.log(data)});
  }
}
