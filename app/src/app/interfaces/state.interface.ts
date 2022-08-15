import { SceneEnum } from "../enums";
import { CurrencyItemInterface } from "./currency-item.interface";

export interface StateInterface {
  currencies: CurrencyItemInterface[];
  scene: SceneEnum;
}
