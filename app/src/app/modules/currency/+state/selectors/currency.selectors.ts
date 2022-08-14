import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CURRENCY_STORE_KEY} from "../../contants";
import {CurrencyStateInterface} from "../../interfaces";

export const getCartState = createFeatureSelector<CurrencyStateInterface>(CURRENCY_STORE_KEY);

export const getCurrencies = createSelector(
  getCartState,
  (state: CurrencyStateInterface) => state.currencies,
);
