<script setup lang="ts">
import { Scene } from "../lib/engine";
</script>

<template>
  <component :is="Scene.Component.value" />
</template>
