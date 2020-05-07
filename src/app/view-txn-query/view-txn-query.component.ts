import { Component, OnInit } from '@angular/core';
import { Reportform } from '../reportform'
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view-txn-query',
    templateUrl: './view-txn-query.component.html',
    styleUrls: ['./view-txn-query.component.css']
})
export class ViewTxnQueryComponent implements OnInit {

    txns: any = [];
    accId: string;
    walletId: string;
    msg: string;
    username: string;
    txnDateFormFlag = false;
    txnWithReceipentFlag = false;
    rform: Reportform = new Reportform();
    rtype: string;
    errorMsg: string;

    constructor(private walletService: WalletService, private route: Router) { }

    ngOnInit() {
        let token = localStorage.getItem("token");
        if (token != null) {
            this.username = this.walletService.decrypt(token.split('-')[1]);
            this.walletId = this.walletService.decrypt(token.split('-')[0]);

        }
    }

    showTxnDateForm() {
        this.txnDateFormFlag = true;

    }
    showSixMonths() {
        this.txnDateFormFlag = false;
        this.txnWithReceipentFlag = false;
        this.walletService.sixMonthsTxns(this.walletId).subscribe(data => this.txns = data);
    }

    processReport() {
        this.txnDateFormFlag = false;
        this.rform.walletId = this.walletId;
        //this.errorMsg = '';
        switch (this.rtype) {
            case "0":
                this.walletService.viewDtTxns(this.rform).subscribe(
                    data => this.txns = data,
                    error => this.errorMsg = error.error.msg);
                    console.log(this.errorMsg);
                break;
            case "1":
                if (this.rform.receipentId.length == 0) {
                    this.errorMsg = "Enter Receipent ID";
                    this.txnDateFormFlag = true;

                }
                else
                    this.walletService.viewDtTxnsRecpRecieved(this.rform)
                        .subscribe(data => this.txns = data,
                            error => this.errorMsg = error.error.msg);
                break;
            case "2":
                if (this.rform.receipentId.length == 0) {
                    this.errorMsg = "Enter Receipent ID";
                    this.txnDateFormFlag = true;

                }
                else
                    this.walletService.viewDtTxnsRecpTransferred(this.rform)
                        .subscribe(data => this.txns = data,
                            error => this.errorMsg = error.error.msg);
                break;



        }
    }
    go() {

        let token = localStorage.getItem("token");
        if (token != null) {
            this.accId = this.walletService.decrypt(token.split("-")[0]);
        }
        console.log(this.accId);
        this.route.navigateByUrl("/viewtxns/" + this.accId);

    }
    downloadPdf() {
        this.walletService.downloadPdf(this.walletId).subscribe(data => {console.log(data);
            let blob = new Blob([data], { type: 'application/pdf' });
            var downloadURL = window.URL.createObjectURL(data);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = "transctions.pdf"
            link.click();
        });
    }


}
