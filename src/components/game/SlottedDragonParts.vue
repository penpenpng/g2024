<script setup lang="ts">
import { computed } from "vue";
import { unset, type DragonParts } from "../../lib/game";
import TornadoImg from "../../assets/tornado.png";
import DragonImg from "../../assets/dragon.png";

const props = defineProps<{
  parts: DragonParts | undefined;
}>();

const onclick = () => {
  if (props.parts) unset(props.parts);
};

const src = computed(() => {
  if (!props.parts) {
    return "";
  }

  if (props.parts === "dragon") {
    return DragonImg;
  } else if (props.parts === "tornado") {
    return TornadoImg;
  } else {
    return props.parts.img;
  }
});
</script>

<template>
  <div class="card" @click="onclick">
    <img v-if="parts" :src="src" alt="" />
  </div>
</template>

<style scoped>
.card {
  width: 150px;
  height: 100px;
  border: solid 1px black;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
