<script setup lang="ts">
import { makeDragon, makeDragonAvailable } from "../../lib/game";
</script>

<template>
  <div
    class="button"
    :class="{ disabled: !makeDragonAvailable }"
    @click="makeDragonAvailable && makeDragon()"
  >
    <img v-if="makeDragonAvailable" src="../../assets/eye.png" />
  </div>
</template>

<style scoped>
.button {
  margin: 10px;
  height: 50px;
  text-align: center;
  outline: solid 1px lightgray;
}

.button:not(.disabled) {
  cursor: pointer;
  outline: solid 2px red;
}

.button img {
  height: 100%;
  object-fit: contain;
}
</style>
