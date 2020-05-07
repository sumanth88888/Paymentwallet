import { Component, OnInit, ViewChild } from '@angular/core';
import { Transferform } from '../transferform'
import { NgForm } from '@angular/forms';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent implements OnInit {

  tform: Transferform = new Transferform();
  msg: string;
  showFlag = true;

  showError:boolean=true;
  @ViewChild('accfrm')
  form: NgForm;

  constructor(private walletService: WalletService, private route: Router) { }

  ngOnInit() {
  }
  transferFund() {

    let token = localStorage.getItem("token");
    if (token != null)
      this.tform.fromaccountID = this.walletService.decrypt(token.split('-')[0]);

    this.walletService.transferFund(this.tform).subscribe(data => {
      this.msg = data.message;
      console.log(data);
      this.form.reset();
      this.showFlag = true;
  
    },error => {this.msg = error.error.msg;this.showError=false;}
    );

  }

}
