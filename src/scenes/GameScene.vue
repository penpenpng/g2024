<script setup lang="ts">
import ResultScene from "./ResultScene.vue";
import { Scene } from "../lib/engine";
</script>

<template>
  <div>ゲーム</div>
  <button @click="Scene.go(ResultScene)">リザルトへ</button>
</template>
