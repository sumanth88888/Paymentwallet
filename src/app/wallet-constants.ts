export class WalletConstants {
public static SPRING_WEB_URL = "http://localhost:8082/Sprint2/";
public static LOGIN_URL = WalletConstants.SPRING_WEB_URL+"login";
public static ADD_ACCOUNT_URL = WalletConstants.SPRING_WEB_URL+"addaccount";
public static ADD_AMOUNT_URL = WalletConstants.SPRING_WEB_URL+"addamount";
public static ACCOUNT_SUMMARY_URL = WalletConstants.SPRING_WEB_URL+"accountsummary";
public static VIEW_TXN_URL= WalletConstants.SPRING_WEB_URL+"getWalletTransactions";
public static VIEW_TXN_DT_URL= WalletConstants.SPRING_WEB_URL+"getWalletTxnsForDateRange";
public static VIEW_TXN_DT_RECP_TO_URL= WalletConstants.SPRING_WEB_URL+"gettxnsrecipenttodaterange";
public static VIEW_TXN_DT_RECP_FROM_URL= WalletConstants.SPRING_WEB_URL+"gettxnsrecipentfromdaterange";
public static SIX_MONTHS_TXNS=WalletConstants.SPRING_WEB_URL+"getWalletTransactions/six";
public static VIEW_TXN_RECP_FROM_URL = WalletConstants.SPRING_WEB_URL+"gettxnsrecipentfromdaterange";
public static VIEW_TXN_RECP_TO_URL = WalletConstants.SPRING_WEB_URL+"gettxnsrecipenttodaterange";
public static TRANSFER_URL= WalletConstants.SPRING_WEB_URL+"transfer";
public static VIEW_PDF_URL=WalletConstants.SPRING_WEB_URL+"viewpdf";
public static SHOW_BALANCE_URL=WalletConstants.SPRING_WEB_URL+"showbalance";
public static LOGOUT_URL=WalletConstants.SPRING_WEB_URL +"logout";
}

