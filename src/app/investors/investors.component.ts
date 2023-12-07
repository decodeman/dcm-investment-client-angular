import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DatafetcherService } from '../datafetcher.service';
import { HederaAccount } from '../hederaAccount';
import { Investor } from '../investor';

export interface Person {
  name: string;
  place: string;
}

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css'],
})
export class InvestorsComponent {

  investors!: Observable<Investor[]>;

  constructor(private datafetcherService: DatafetcherService) {
    const tokenMap = datafetcherService.tokenMap;

    const investorThumbnails: Investor[] = datafetcherService.investorThumbnails;

    this.investors = of(investorThumbnails);

    for(let investorThumbnail of investorThumbnails) {
      datafetcherService.getHederaAccount(investorThumbnail.account).subscribe(data => {console.log(data)});
      datafetcherService.getHederaAccount(investorThumbnail.account).subscribe(data => {
        for(let token of data.balance.tokens) {
          token.name = tokenMap.get(token.token_id).name;
          token.symbol = tokenMap.get(token.token_id).symbol;
        }
        investorThumbnail.tokens = data.balance.tokens});
    }

  
//     let promiseArray = [];
// for(let i=0;i<investorThumbnails.length;i++){
//    var apiRequest = http.request({
//        ....
//      }
//     });
//    promiseArray.push(apiRequest)
// }

// Promise.all(promiseArray)
// .then(fn)
// .catch(fn)

  }
}
