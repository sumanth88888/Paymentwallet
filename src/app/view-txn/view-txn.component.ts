import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-view-txn',
  templateUrl: './view-txn.component.html',
  styleUrls: ['./view-txn.component.css']
})
export class ViewTxnComponent implements OnInit {
  errorMsg:string;
  txns: any = [];
  username: string;
  constructor(private walletService: WalletService, private route: ActivatedRoute) { }
  ngOnInit() {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token != null)
      this.username = this.walletService.decrypt(token.split('-')[0]);
      console.log(this.username);
      
    this.route.paramMap.subscribe(params => {
      let walletId = params.get('walletid');
      console.log(walletId);
      this.walletService.viewTxns(walletId).subscribe(data => {this.txns = data; console.log(data)},
             error=>this.errorMsg=error.error.msg
      );
    });
  }

}
