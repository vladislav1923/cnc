import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {CurrencyResponseInterface} from "../../interfaces";

export const fetchCurrencies = createAction(
  '[Currency] Fetch Currencies',
);

export const fetchCurrenciesSucceed = createAction(
  '[Currency] Fetch Currencies Succeed',
  props<{ response: CurrencyResponseInterface }>(),
);

export const fetchCurrenciesFailed = createAction(
  '[Currency] Fetch Currencies Failed',
  props<{ error: HttpErrorResponse }>(),
);
