<script setup lang="ts">
import DragonPartsCard from "./DragonPartsCard.vue";
import { hands } from "../../lib/game";
</script>

<template>
  <div>
    <DragonPartsCard :card="hands[0]" />
    <DragonPartsCard :card="hands[1]" />
    <DragonPartsCard :card="hands[2]" />
    <DragonPartsCard :card="hands[3]" />
  </div>
</template>
