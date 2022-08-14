import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as CurrencyActions from '../actions/currency.actions';
import * as CurrencySelectors from '../selectors/currency.selectors';

@Injectable()
export class CurrencyFacade {
  public currencies$ = this.store.pipe(select(CurrencySelectors.getCurrencies));

  constructor(private readonly store: Store) {}

  public fetchCurrencies(): void {
    this.store.dispatch(CurrencyActions.fetchCurrencies());
  }
}
