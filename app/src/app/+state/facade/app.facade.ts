import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as AppActions from '../actions/app.actions';
import * as AppSelectors from '../selectors/app.selectors';

@Injectable()
export class AppFacade {
  public currencies$ = this.store.pipe(select(AppSelectors.getCurrencies));
  public scene$ = this.store.pipe(select(AppSelectors.getScene));

  constructor(private readonly store: Store) {}

  public fetchCurrencies(): void {
    this.store.dispatch(AppActions.fetchCurrencies());
  }
}
