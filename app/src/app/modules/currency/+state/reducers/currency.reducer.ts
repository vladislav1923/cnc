import { createReducer, on } from "@ngrx/store";
import * as actions from '../actions/currency.actions';
import {CURRENCY_INITIAL_STATE} from "../../contants";
import {prepareCurrencies} from "../../helpers/currency-helpers";

export const currencyReducer = createReducer(
  CURRENCY_INITIAL_STATE,
  on(actions.fetchCurrencies, (state) => ({
    ...state,
    isCurrenciesLoading: true,
  })),
  on(actions.fetchCurrenciesSucceed, (state, { response }) => ({
    ...state,
    isCurrenciesLoading: false,
    currencies: prepareCurrencies(response),
  })),
);
