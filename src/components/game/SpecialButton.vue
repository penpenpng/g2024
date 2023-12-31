<script setup lang="ts">
import { special, useSpecial } from "../../lib/game";
</script>

<template>
  <div
    class="button"
    :class="{ disabled: special === 'none' }"
    @click="useSpecial"
  >
    <img v-if="special === 'normal'" src="../../assets/reload.png" />
    <img v-if="special === 'tornado'" src="../../assets/tornado.png" />
  </div>
</template>

<style scoped>
.button {
  margin: 10px;
  height: 50px;
  border: solid 1px lightgray;
  text-align: center;
}

.button:not(.disabled) {
  cursor: pointer;
}

.button img {
  height: 100%;
  object-fit: contain;
}
</style>
