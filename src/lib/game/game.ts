import GameScene from "../../scenes/GameScene.vue";
import { Scene, Audio } from "../engine";
import { loadImageAssets } from "./doragon-parts";
import { start } from "./timer";

declare global {
  interface AudioAssets {}
}

export const setupGameApp = async () => {
  Scene.go(GameScene);

  await loadImageAssets();
  await Audio.load({});
};

export const setupGame = () => {
  start();
};
