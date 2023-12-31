<script setup lang="ts">
import SlottedDragonParts from "./SlottedDragonParts.vue";
import { slotted } from "../../lib/game";
</script>

<template>
  <div class="slot">
    <SlottedDragonParts :parts="slotted[0]" />
    <SlottedDragonParts :parts="slotted[1]" />
  </div>
</template>

<style scoped>
.slot {
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: solid 1px lightgray;
}
</style>
