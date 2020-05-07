import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAccountSummaryComponent } from './view-account-summary/view-account-summary.component';
import { AddAmountComponent } from './add-amount/add-amount.component';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { ViewTxnComponent } from './view-txn/view-txn.component';
import { ViewTxnQueryComponent } from './view-txn-query/view-txn-query.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { ErrorComponent } from './error/error.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewAccountSummaryComponent,
    AddAmountComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    TransferFundComponent,
    ViewTxnComponent,
    ViewTxnQueryComponent,
    ShowbalanceComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
