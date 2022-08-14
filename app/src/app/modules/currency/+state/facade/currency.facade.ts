import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import * as CurrencyActions from '../actions/currency.actions';

@Injectable()
export class CurrencyFacade {
  constructor(private readonly store: Store) {}

  public fetchCurrencies(): void {
    this.store.dispatch(CurrencyActions.fetchCurrencies());
  }
}
