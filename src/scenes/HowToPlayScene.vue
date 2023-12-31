<script setup lang="ts">
import TitleScene from "./TitleScene.vue";
import { Scene } from "../lib/engine";
</script>

<template>
  <div>あそびかた</div>
  <button @click="Scene.go(TitleScene)">もどる</button>
</template>
