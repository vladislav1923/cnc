import { Component, OnInit } from '@angular/core';
import {CurrencyFacade} from "../../+state/facade/currency.facade";
import {Observable} from "rxjs";
import {CurrencyItemInterface} from "../../interfaces";

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  public currencies$: Observable<CurrencyItemInterface[]> = this.currencyFacade.currencies$;

  constructor(private currencyFacade: CurrencyFacade) {}

  public ngOnInit(): void {
     this.currencyFacade.fetchCurrencies();
  }
}
