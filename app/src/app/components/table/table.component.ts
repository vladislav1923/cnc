import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CurrencyItemInterface} from "../../interfaces";
import {Subject} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input()
  public currencies: CurrencyItemInterface[] | null = [];

  public inputValue = '';
  public value = 0;

  public onValueChange(value: string): void {
    const numericValue = Number(value);
    if (Number.isNaN(numericValue) || numericValue < 0) {
      this.inputValue = '';
      this.value = 0;
    } else {
      this.inputValue = value;
      this.value = numericValue;
    }
  }
}
