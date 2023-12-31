<script setup lang="ts">
import type { DragonPartsCard } from "../../lib/game/cards";
import { setHand, isSlotted } from "../../lib/game";

const props = defineProps<{
  card: DragonPartsCard;
}>();

const onclick = () => {
  if (isSlotted(props.card).value) {
    return;
  }

  setHand(props.card);
};
</script>

<template>
  <div class="card" @click="onclick">
    <img v-if="!isSlotted(card).value" :src="card.img" alt="" />
  </div>
</template>

<style scoped>
.card {
  width: 150px;
  height: 100px;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: solid 1px seagreen;
  cursor: pointer;
}
</style>
