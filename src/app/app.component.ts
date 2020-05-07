import { Component, OnInit } from '@angular/core';
import { WalletService } from './wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PaymentWallet';
  token:string;
  constructor(private walletService:WalletService, private route:Router){}
  ngOnInit(): void {
    this.token = localStorage.getItem("token");
  }

  logout():void{
    this.walletService.doLogOut().subscribe(data=>{localStorage.removeItem("token");})

    this.route.navigateByUrl("/login");

  }



}
