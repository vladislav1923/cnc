import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {currencyReducer} from "./+state/reducers/currency.reducer";
import {CurrencyEffects} from "./+state/effects/currency.effects";
import {CurrencyComponent} from "./components/currency/currency.component";
import {CurrencyRoutingModule} from "./currency-routing.module";
import {CURRENCY_STORE_KEY} from "./contants";
import {CurrencyFacade} from "./+state/facade/currency.facade";
import {CurrencyService} from "./services/currency.service";
import {HttpClientModule} from "@angular/common/http";
import {CurrencyTableComponent} from "./components/currency-table/currency-table.component";
import {RublesPipe} from "./pipes/rubles/rubles.pipe";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CurrencyRoutingModule,
    StoreModule.forFeature(CURRENCY_STORE_KEY, currencyReducer),
    EffectsModule.forFeature([CurrencyEffects]),
  ],
  declarations: [
    CurrencyComponent,
    CurrencyTableComponent,
    RublesPipe,
  ],
  providers: [
    CurrencyFacade,
    CurrencyService,
  ]
})
export class CurrencyModule {}
