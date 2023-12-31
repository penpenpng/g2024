<script setup lang="ts">
import ResultScene from "./ResultScene.vue";
import TimeRemaining from "../components/game/TimeRemaining.vue";
import Hands from "../components/game/Hands.vue";
import Score from "../components/game/Score.vue";
import PartsSlot from "../components/game/PartsSlot.vue";
import MakeDragonButton from "../components/game/MakeDragonButton.vue";
import SpecialButton from "../components/game/SpecialButton.vue";
import { Scene } from "../lib/engine";

import { setupGame } from "../lib/game";

setupGame();
</script>

<template>
  <div>ゲーム</div>
  <TimeRemaining />
  <Score />
  <PartsSlot />
  <MakeDragonButton />
  <Hands />
  <SpecialButton />
  <button @click="Scene.go(ResultScene)">リザルトへ</button>
</template>
