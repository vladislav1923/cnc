import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CurrencyItemInterface} from "../../interfaces";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input()
  public currencies: CurrencyItemInterface[] | null = [];
}
