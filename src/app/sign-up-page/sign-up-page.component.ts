import { Component, OnInit, ViewChild } from '@angular/core';
import {WalletAccountForm} from '../wallet-account-form'
import {WalletService} from '../wallet.service'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  accountForm:WalletAccountForm = new WalletAccountForm();
  msg:string;
  errorMsg:string;
  @ViewChild('accfrm')
  form:NgForm;
  constructor(private walletService:WalletService, private route:Router) { }

  ngOnInit() {
  }

  addAccount(){
    this.walletService.addAccount(this.accountForm).subscribe(data=>
      {this.msg=data.message; this.form.resetForm},
      error=>this.errorMsg=error.error.message);
      
      this.route.navigate(['/']);
  }

}
