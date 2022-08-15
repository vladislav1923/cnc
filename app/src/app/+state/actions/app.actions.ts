import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";
import { CurrencyResponseDto } from "../../dto";

export const fetchCurrencies = createAction(
  '[App] Fetch Currencies',
);

export const updateCurrencies = createAction(
  '[App] Update Currencies',
);

export const fetchCurrenciesSucceed = createAction(
  '[App] Fetch Currencies Succeed',
  props<{ response: CurrencyResponseDto }>(),
);

export const fetchCurrenciesFailed = createAction(
  '[App] Fetch Currencies Failed',
  props<{ error: HttpErrorResponse }>(),
);
