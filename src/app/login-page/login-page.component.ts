import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username:string;
  password:string;
  showFlag=true;
  errorMsg:string;

  constructor(private walletService:WalletService, private route:Router) { }

  ngOnInit() {
  }

  doLogin(){
    this.walletService.doLogin(this.username,this.password).subscribe(data=>
      {this.showFlag=false;localStorage.setItem("token",data);this.route.navigateByUrl("/viewaccount");
    console.log(data)},
      error=>{this.errorMsg = JSON.parse(error.error).msg;console.log(error)});

    //this.route.navigate(['/','home']);
  }

}
