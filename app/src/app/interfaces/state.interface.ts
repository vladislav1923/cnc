import {SceneEnum} from "../enums/scene.enum";
import {CurrencyItemInterface} from "./currency-item.interface";

export interface StateInterface {
  currencies: CurrencyItemInterface[];
  scene: SceneEnum;
}
