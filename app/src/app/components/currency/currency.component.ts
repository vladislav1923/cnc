import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppFacade} from "../../+state/facade/app.facade";
import {Observable} from "rxjs";
import {CurrencyItemInterface} from "../../interfaces";
import {SceneEnum} from "../../enums/scene.enum";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent implements OnInit {
  public currencies$: Observable<CurrencyItemInterface[]> = this.appFacade.currencies$;
  public scene$: Observable<SceneEnum> = this.appFacade.scene$;
  public readonly scene = SceneEnum;

  constructor(private appFacade: AppFacade) {}

  public ngOnInit(): void {
     this.appFacade.fetchCurrencies();
  }
}
