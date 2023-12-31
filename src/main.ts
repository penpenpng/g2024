import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { setupGameApp } from "./lib/game/game";

setupGameApp().then(() => {
  createApp(App).mount("#app");
});
