import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WalletConstants } from './wallet-constants';
import { WalletAccountForm } from './wallet-account-form';
import { Observable } from 'rxjs';
import { Txnform } from './txnform';
import {Transferform} from './transferform'
import {Reportform} from './reportform'

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  public doLogin(username:string, password:string){
    let form = new FormData();
    form.append("userid", username);
    form.append("password",password);
    return this.http.post(WalletConstants.LOGIN_URL, form,{responseType:'text'})
  }
  public doLogOut(){
    let utoken = localStorage.getItem("token");
    if(utoken==null) utoken="";
    const httpHeaders = new HttpHeaders({"userId":utoken});
    return this.http.get(WalletConstants.LOGOUT_URL,{headers:httpHeaders, responseType:'text'});
  }
  

  public addAccount(accForm:WalletAccountForm):Observable<any>{
    return this.http.post(WalletConstants.ADD_ACCOUNT_URL, accForm);
  }

  public addAmount(txnForm:Txnform):Observable<any>{
    return this.http.post(WalletConstants.ADD_AMOUNT_URL, txnForm);
  }

  public viewAccount(accId:string):Observable<any>{
    return this.http.get(WalletConstants.ACCOUNT_SUMMARY_URL+"/"+accId);
  }

  public decrypt(token:string): string{
    
    let str = "";
    for(let i =0; i< token.length; ++i){
      str = str + String.fromCharCode(token.charCodeAt(i) - 3);
    }
    console.log(str);
    return str;
  }

  public transferFund(tform:Transferform):Observable<any>{
    return this.http.post(WalletConstants.TRANSFER_URL, tform );
  }

  public viewTxns(walletId:string):Observable<any>{
    return this.http.get(WalletConstants.VIEW_TXN_URL+"/"+walletId);
 }
  public viewDtTxns(rform:Reportform):Observable<any>{
    return this.http.post(WalletConstants.VIEW_TXN_DT_URL, rform);
    
 }

 public sixMonthsTxns(walletId:string):Observable<any>{
   return this.http.get(WalletConstants.SIX_MONTHS_TXNS+"/"+walletId);
 }

 public viewDtTxnsRecpRecieved(rform:Reportform):Observable<any>{
  return this.http.post(WalletConstants.VIEW_TXN_RECP_FROM_URL, rform);
}

public viewDtTxnsRecpTransferred(rform:Reportform):Observable<any>{
  return this.http.post(WalletConstants.VIEW_TXN_RECP_TO_URL, rform);
}

public downloadPdf(walletId:string):Observable<any>{
  return this.http.get(WalletConstants.VIEW_PDF_URL+"/"+walletId,{responseType:'blob' as 'json'});
}

public showBalance(walletid:string):Observable<any>{
    return this.http.get(WalletConstants.SHOW_BALANCE_URL+"/"+walletid);
  }

}

 

