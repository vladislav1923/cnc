import { Component, OnInit } from '@angular/core';
import {CurrencyFacade} from "../../+state/facade/currency.facade";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(private currencyFacade: CurrencyFacade) {}

  public ngOnInit(): void {
     this.currencyFacade.fetchCurrencies();
  }
}
