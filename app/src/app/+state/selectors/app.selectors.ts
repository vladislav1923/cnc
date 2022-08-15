import {createFeatureSelector, createSelector} from "@ngrx/store";
import {STORE_KEY} from "../../contants";
import {StateInterface} from "../../interfaces";

export const getCartState = createFeatureSelector<StateInterface>(STORE_KEY);

export const getCurrencies = createSelector(
  getCartState,
  (state: StateInterface) => state.currencies,
);

export const getScene = createSelector(
  getCartState,
  (state: StateInterface) => state.scene,
);
