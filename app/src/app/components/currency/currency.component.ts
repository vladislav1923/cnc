import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AppFacade } from "../../+state/facade/app.facade";
import { interval, Observable, Subscription } from "rxjs";
import { CurrencyItemInterface } from "../../interfaces";
import { SceneEnum } from "../../enums";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent implements OnInit, OnDestroy {
  public currencies$: Observable<CurrencyItemInterface[]> = this.appFacade.currencies$;
  public scene$: Observable<SceneEnum> = this.appFacade.scene$;
  public readonly scene = SceneEnum;
  private interval?: Subscription;

  constructor(private appFacade: AppFacade) {}

  public ngOnInit(): void {
     this.appFacade.fetchCurrencies();
     this.interval = interval(10000).pipe(
       map(() => this.appFacade.updateCurrencies()),
     ).subscribe();
  }

  public ngOnDestroy(): void {
    if (this.interval) {
      this.interval.unsubscribe();
    }
  }
}
