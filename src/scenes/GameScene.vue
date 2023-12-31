<script setup lang="ts">
import TimeRemaining from "../components/game/TimeRemaining.vue";
import Hands from "../components/game/Hands.vue";
import Score from "../components/game/Score.vue";
import PartsSlot from "../components/game/PartsSlot.vue";
import MakeDragonButton from "../components/game/MakeDragonButton.vue";
import SpecialButton from "../components/game/SpecialButton.vue";

import { cleanupGame, setupGame } from "../lib/game";
import { onUnmounted } from "vue";

setupGame();

onUnmounted(() => {
  cleanupGame();
});
</script>

<template>
  <div class="indicators">
    <TimeRemaining />
    <Score />
  </div>
  <PartsSlot />
  <MakeDragonButton />
  <Hands />
  <SpecialButton />
</template>

<style scope>
.indicators {
  padding: 5px;
  display: grid;
  grid-template-columns: 70% 30%;
}
</style>
