import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {CurrencyResponseDto} from "../../dto";

export const fetchCurrencies = createAction(
  '[Currency] Fetch Currencies',
);

export const fetchCurrenciesSucceed = createAction(
  '[Currency] Fetch Currencies Succeed',
  props<{ response: CurrencyResponseDto }>(),
);

export const fetchCurrenciesFailed = createAction(
  '[Currency] Fetch Currencies Failed',
  props<{ error: HttpErrorResponse }>(),
);
