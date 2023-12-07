import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatafetcherService } from '../datafetcher.service';
import { Investor } from '../investor';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  investor: Investor | undefined;

  tokens = this.datafetcherService.tokenMap.values();
  tokenMap = this.datafetcherService.tokenMap;

  checkoutForm = this.formBuilder.group({
    tokenId: '',
    amount: ''
  });

  constructor(
    private route: ActivatedRoute,
    private datafetcherService: DatafetcherService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    console.log('tokens', this.tokens);

  }

  ngOnInit() {
    // First get the account from the current route.
    const routeParams = this.route.snapshot.paramMap;
    // const accountFromRoute = Number(routeParams.get('account'));
    const accountFromRoute = routeParams.get('account');

    // Find the product that correspond with the id provided in route.
    this.investor = this.datafetcherService.investorThumbnails.find(
      (investor) => investor.account === accountFromRoute
    );
  }

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    if(confirm("Are you sure to purchase?")) {
      
    //this.checkoutForm.reset();
    // this.datafetcherService.makePurchase(this.investor.account | "x.y.z", this.checkoutForm.value.tokenId, Number(this.checkoutForm.value.amount))
    this.datafetcherService.makePurchase(this.investor?.account!, this.checkoutForm.value.tokenId!, Number(this.checkoutForm.value.amount)).subscribe(res => {
      console.log('res', res);
      this.router.navigate(['/']);
    });
  }
  }
}
