<script setup lang="ts">
import GameScene from "./GameScene.vue";
import { Scene } from "../lib/engine";
</script>

<template>
  <div>title</div>
  <button @click="Scene.go(GameScene)">go to game</button>
</template>
