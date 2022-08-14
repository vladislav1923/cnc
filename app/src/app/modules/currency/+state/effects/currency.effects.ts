import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CurrencyActions from '../actions/currency.actions';
import {CurrencyService} from "../../services/currency.service";
import {HttpErrorResponse} from "@angular/common/http";
import { of } from 'rxjs';
import {CurrencyResponseInterface} from "../../interfaces";


@Injectable()
export class CurrencyEffects {
  public fetchCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrencyActions.fetchCurrencies),
      switchMap(() => {
        return this.currencyService.fetchCurrencies().pipe(
          map((response: CurrencyResponseInterface) => {
            return CurrencyActions.fetchCurrenciesSucceed({ response });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(CurrencyActions.fetchCurrenciesFailed({ error }));
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService,
  ) {}
}
