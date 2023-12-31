import GameScene from "../../scenes/GameScene.vue";
import { Scene } from "../engine";
import { loadImageAssets } from "./doragon-parts";
import { start } from "./timer";

export const setupGameApp = async () => {
  Scene.go(GameScene);

  await loadImageAssets();
};

export const setupGame = () => {
  start();
};
