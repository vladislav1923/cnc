import {StateInterface} from "../interfaces";
import {SceneEnum} from "../enums/scene.enum";

export const INITIAL_STATE: StateInterface = {
  currencies: [],
  scene: SceneEnum.Init,
};
