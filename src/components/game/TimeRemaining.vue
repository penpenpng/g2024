<script setup lang="ts">
import { computed } from "vue";
import { timeRemaining, timelimit } from "../../lib/game";

const value = computed(() => (timeRemaining.value / timelimit) * 100);
</script>

<template>
  <div class="gage">
    <div class="value" :style="{ width: `${value}%` }"></div>
  </div>
</template>

<style scoped>
.gage {
  height: 15px;

  border: white solid 3px;
  background-color: gray;

  .value {
    height: 100%;

    background-color: hotpink;
  }
}
</style>
