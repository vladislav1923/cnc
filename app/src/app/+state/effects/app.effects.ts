import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import * as AppActions from '../actions/app.actions';
import {CurrencyService} from "../../services/currency.service";
import {HttpErrorResponse} from "@angular/common/http";
import { of } from 'rxjs';
import {CurrencyResponseDto} from "../../dto";

@Injectable()
export class AppEffects {
  public fetchCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.fetchCurrencies),
      switchMap(() => {
        return this.currencyService.fetchCurrencies().pipe(
          delay(1000),
          map((response: CurrencyResponseDto) => {
            return AppActions.fetchCurrenciesSucceed({ response });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(AppActions.fetchCurrenciesFailed({ error }));
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
