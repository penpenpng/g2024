<script setup lang="ts">
import { score, showDragonInScore, setDragon } from "../../lib/game";
</script>

<template>
  <div>
    <span v-if="showDragonInScore" @click="setDragon">🐉</span>{{ score }}
  </div>
</template>
