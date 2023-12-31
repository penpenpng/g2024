<script setup lang="ts">
import { makeDragon, makeDragonAvailable } from "../../lib/game";
</script>

<template>
  <div class="button" @click="makeDragonAvailable && makeDragon()">
    <span v-if="makeDragonAvailable">👁</span>
  </div>
</template>

<style scoped>
.button {
  width: 200px;
  height: 50px;
  border: solid 1px;
}
</style>
