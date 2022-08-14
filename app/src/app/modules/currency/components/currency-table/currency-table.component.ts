import {Component, Input} from '@angular/core';
import {CurrencyItemInterface} from "../../interfaces";

@Component({
  selector: 'currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent {
  @Input()
  public currencies: CurrencyItemInterface[] | null = [];
}
