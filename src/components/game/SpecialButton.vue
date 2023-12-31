<script setup lang="ts">
import { special, useSpecial } from "../../lib/game";
</script>

<template>
  <div class="button" @click="useSpecial">
    <span v-if="special === 'normal'">引き直す</span>
    <img v-if="special === 'tornado'" src="../../assets/tornado.png" />
  </div>
</template>

<style scoped>
.button {
  width: 200px;
  height: 50px;
  border: solid 1px;
}

.button img {
  height: 100%;
  object-fit: contain;
}
</style>
