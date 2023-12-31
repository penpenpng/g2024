<script setup lang="ts">
import { Scene } from "../lib/engine";
</script>

<template>
  <div class="scene">
    <component :is="Scene.Component.value" />
  </div>
</template>

<style scoped>
.scene {
  max-width: 360px;
  width: 100%;
  height: 660px;
  background-color: white;
}
</style>
