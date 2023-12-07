import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { InvestorsComponent } from './investors/investors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { environment } from '../environments/environment';
import {
  ApiModule,
  Configuration,
  ConfigurationParameters,
} from './core/api/v1';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.basePath,
  };
  return new Configuration(params);
}

@NgModule({
  imports: [
    ApiModule.forRoot(apiConfigFactory),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'purchase/:account', component: PurchaseComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent },
      // { path: 'cart', component: CartComponent },
      // { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    InvestorsComponent,
    DashboardComponent,
    StocksComponent,
    PurchaseComponent,
    InvestmentListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
