<script setup lang="ts">
import DragonPartsCard from "./DragonPartsCard.vue";
import { hands } from "../../lib/game";
</script>

<template>
  <div class="grid">
    <DragonPartsCard :card="hands[0]" />
    <DragonPartsCard :card="hands[1]" />
    <DragonPartsCard :card="hands[2]" />
    <DragonPartsCard :card="hands[3]" />
    <DragonPartsCard :card="hands[4]" />
    <DragonPartsCard :card="hands[5]" />
  </div>
</template>

<style scoped>
.grid {
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: solid 1px lightgray;
}

.grid > * {
  margin: 3px;
}
</style>
