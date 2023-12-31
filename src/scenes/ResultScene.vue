<script setup lang="ts">
import TitleScene from "./TitleScene.vue";
import GameScene from "./GameScene.vue";
import { Scene } from "../lib/engine";
</script>

<template>
  <div>リザルト</div>
  <button @click="Scene.go(GameScene)">もういちど</button>
  <button @click="Scene.go(TitleScene)">タイトルに戻る</button>
</template>
