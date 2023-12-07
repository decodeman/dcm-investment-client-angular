import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { HederaAccount, HederaToken } from './hederaAccount';
import { Investor } from './investor';
import { Observable } from 'rxjs';
import { Investment } from './core/api/v1';

@Injectable({
  providedIn: 'root'
})
export class DatafetcherService {
  investorThumbnails: Investor[] = [
    {
      name: "Alan Jackson",
      account: "0.0.168821",
      tokens: []
    },
    {
      name: "Marlee Baldwin",
      account: "0.0.169270",
      tokens: []
    },
    {
      name: "Jaiden Contreras",
      account: "0.0.168821",
      tokens: []
    },
    {
      name: "Daniela Morris",
      account: "0.0.169270",
      tokens: []
    },
    {
      name: "Christian Kane",
      account: "0.0.168821",
      tokens: []
    },
    {
      name: "Ellianna Chang",
      account: "0.0.169270",
      tokens: []
    },
    {
      name: "Ari Bradford",
      account: "0.0.168821",
      tokens: []
    },
    {
      name: "Rhea Miller",
      account: "0.0.169270",
      tokens: []
    },
    {
      name: "Benjamin Butler",
      account: "0.0.168821",
      tokens: []
    },
    {
      name: "Athena Ramsey",
      account: "0.0.169270",
      tokens: []
    }
  ];

  // tokenMap: any = {
  //   "0.0.169487": {name: "USD Bar", symbol: "USDB"},
  //   "0.0.644358": {name: "Bird Bucks", symbol: "BirdBucks"}
  // };

  tokenMap = new Map<string, any>([
    ["0.0.169487", { name: "USD Bar", symbol: "USDB", id: "0.0.169487" }],
    ["0.0.644358", { name: "Bird Bucks", symbol: "BirdBucks", id: "0.0.644358" }]
  ]);

  constructor(private http: HttpClient) { }

  getHederaAccountsJson() {
    return this.http.get<{ account: string, memo: string }[]>('/assets/hederaAccounts.json');
  }

  getHederaAccounts() {
    return this.http.get<{ account: string, memo: string }[]>('https://testnet.mirrornode.hedera.com/api/v1/accounts');
  }

  getTreasuryAccount() {
    console.log('getTreasuryAccount called');
    let result = this.http.get<{ account: string, memo: string }>("https://testnet.mirrornode.hedera.com/api/v1/accounts/0.0.169270");
    console.log(result);
    return result;
  }

  getTreasuryAccount$() {
    console.log('getTreasuryAccount called');
    let result = this.http.get<{
      account: string,
      memo: string
    }>("https://testnet.mirrornode.hedera.com/api/v1/accounts/0.0.169270");
    console.log(result);
    return result;
  }

  getBretAccount() {
    console.log('getBretAccount called');
    let result = this.http.get<HederaAccount>("https://testnet.mirrornode.hedera.com/api/v1/accounts/0.0.168821");
    console.log(result);
    return result;
  }

  getBretAccountFull() {
    console.log('getHederaAccountFull called');
    let result = this.http.get<HederaAccount>("https://testnet.mirrornode.hedera.com/api/v1/accounts/0.0.168821");
    console.log(result);
    return result;

  }

  getBretAccountBalanceWS() {
    console.log('getBretAccountBalanceWS called');
    let result = this.http.get<any>("http://localhost:3000/getBretBalance");
    console.log(result);
    return result;

  }

  getInvestors() {
    return this.http.get<Investor[]>('/assets/investors.json');
  }

  getHederaAccount(account: string) {
    return this.http.get<HederaAccount>('https://testnet.mirrornode.hedera.com/api/v1/accounts/' + account);
  }

  makePurchasePost(account: string, tokenId: string, amount: number): Observable<HederaToken> {
    // const options = { params: new HttpParams().set('account',account).set('tokenId',tokenId).set('amount',amount)};
    // return this.http.post<HederaToken>('http://localhost:3000/makePurchase', options);

    // const options = { params: new HttpParams().set('account',account).set('tokenId',tokenId).set('amount',amount)};
    return this.http.post<HederaToken>('http://localhost:3000/makePurchase', { 'account': account, 'tokenId': tokenId, 'amount': amount });

  }

  makePurchase(account: string, tokenId: string, amount: number): Observable<HederaToken> {
    const options = { params: new HttpParams().set('account', account).set('tokenId', tokenId).set('amount', amount) };
    // return this.http.post<HederaToken>('http://localhost:3000/makePurchase', options);

    // const options = { params: new HttpParams().set('account',account).set('tokenId',tokenId).set('amount',amount)};
    return this.http.get<HederaToken>('http://localhost:3000/makePurchase', options);

  }

  // Simple and works, but use API Generated one instead to keep up with spring endpoint changes
  // getInvestments() {
  //   return this.http.get<Investment[]>('/api/investments');
  // }  

  // test if Array instead of [] breaks Observable
  // ...keep making this look more and more like generated api
  // ...discovered blob was the issue
  // getInvestments() {
  //   //return this.http.get<Array<Investment>>('/api/investments');
  //   console.log('in datafetcher getInvestments');
  //   return this.http.request<Array<Investment>>('get', '/api/investments',
  //     {
  //       // context: localVarHttpContext,
  //       responseType: <any>'blob',
  //       // withCredentials: this.configuration.withCredentials,
  //       // headers: localVarHeaders,
  //       observe: 'body',
  //       // reportProgress: reportProgress
  //     }
  //   );
  // }

}
