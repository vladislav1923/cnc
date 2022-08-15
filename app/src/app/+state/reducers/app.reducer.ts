import { createReducer, on } from "@ngrx/store";
import * as AppActions from '../actions/app.actions';
import {INITIAL_STATE} from "../../contants";
import {prepareCurrencies} from "../../helpers/helpers";
import {SceneEnum} from "../../enums/scene.enum";

export const appReducer = createReducer(
  INITIAL_STATE,
  on(AppActions.fetchCurrencies, (state) => ({
    ...state,
    scene: SceneEnum.Init,
  })),
  on(AppActions.fetchCurrenciesSucceed, (state, { response }) => ({
    ...state,
    scene: SceneEnum.Content,
    currencies: prepareCurrencies(response),
  })),
);
