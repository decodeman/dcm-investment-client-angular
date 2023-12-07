import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { /*GreetingControllerService,*/ Investment } from '../core/api/v1';
///why!?
import { GreetingControllerService } from '../core/api/v1/api/greetingController.service';
// import { Investment } from '../core/api/v1';
// import { GreetingControllerService } from '../core/api/v1/api/api';
// import { GreetingControllerService, Investment,  } from '../core/api/v1';
// import { GreetingControllerService, Investment } from '../core/api/v1';
// import { GreetingControllerService, Investment } from '../core/api/v1';
// import { DatafetcherService } from '../datafetcher.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent {
  // testAPIS = APIS;

  // Create a `cold` observable - we will be subscribing to this observable in the template
  // investments$ = this.investmentService.investments();

  investments$!: Observable<Investment[]>;
  //investments2!: Observable<Investment[]>;

  // Inject the generated Angular service as a dependency of this class
  constructor(private investmentService: GreetingControllerService/*,
    private datafetcherService: DatafetcherService*/) {
    console.log('u feel me');
    this.investments$ = this.investmentService.investments();
    //this.investments2 = this.datafetcherService.getInvestments();

  }
}