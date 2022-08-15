import { createReducer, on } from "@ngrx/store";
import * as AppActions from '../actions/app.actions';
import { INITIAL_STATE } from "../../constants";
import { prepareCurrencies } from "../../helpers/helpers";
import { SceneEnum } from "../../enums";

export const appReducer = createReducer(
  INITIAL_STATE,
  on(AppActions.fetchCurrencies, (state) => ({
    ...state,
    scene: SceneEnum.Init,
  })),
  on(AppActions.updateCurrencies, (state) => ({
    ...state,
    scene: SceneEnum.Updating,
  })),
  on(AppActions.fetchCurrenciesSucceed, (state, { response }) => ({
    ...state,
    scene: SceneEnum.Content,
    currencies: prepareCurrencies(response),
  })),
  on(AppActions.fetchCurrenciesFailed, (state) => ({
    ...state,
    scene: SceneEnum.Error,
  })),
);
