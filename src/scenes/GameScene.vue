<script setup lang="ts">
import ResultScene from "./ResultScene.vue";
import TimeRemaining from "../components/game/TimeRemaining.vue";
import { Scene } from "../lib/engine";

import { setupGame } from "../lib/game";

setupGame();
</script>

<template>
  <div>ゲーム</div>
  <TimeRemaining />
  <button @click="Scene.go(ResultScene)">リザルトへ</button>
</template>
