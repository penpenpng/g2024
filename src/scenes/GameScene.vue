<script setup lang="ts">
import TitleScene from "./TitleScene.vue";
import { Scene } from "../lib/engine";
</script>

<template>
  <div>game</div>
  <button @click="Scene.go(TitleScene)">go to title</button>
</template>
