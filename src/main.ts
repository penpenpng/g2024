import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import GameScene from "./scenes/GameScene.vue";
import { Scene } from "./lib/engine";

Scene.go(GameScene);

createApp(App).mount("#app");
