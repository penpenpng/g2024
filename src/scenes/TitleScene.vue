<script setup lang="ts">
import GameScene from "./GameScene.vue";
import HowToPlayScene from "./HowToPlayScene.vue";
import { Scene } from "../lib/engine";
</script>

<template>
  <div>タイトル</div>
  <button @click="Scene.go(GameScene)">はじめる</button>
  <button @click="Scene.go(HowToPlayScene)">あそびかた</button>
</template>
