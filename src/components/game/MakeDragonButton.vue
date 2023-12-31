<script setup lang="ts">
import { ref } from "vue";
import { makeDragon, makeDragonAvailable } from "../../lib/game";
import DragonName from "./DragonName.vue";

const dragonName = ref("まんたつらら");
const showDragonName = ref(false);

const onclick = () => {
  if (!makeDragonAvailable.value) {
    return;
  }

  showDragonName.value = true;
  dragonName.value = makeDragon();
};
</script>

<template>
  <div
    class="button"
    :class="{ disabled: !makeDragonAvailable }"
    @click="onclick"
  >
    <Transition name="dragon-name" @after-enter="showDragonName = false">
      <DragonName v-if="showDragonName" :name="dragonName" />
    </Transition>
    <img
      v-if="!showDragonName && makeDragonAvailable"
      src="../../assets/eye.png"
    />
  </div>
</template>

<style scoped>
.button {
  margin: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: solid 1px lightgray;
}

.button:not(.disabled) {
  cursor: pointer;
  outline: solid 2px red;
}

.button img {
  height: 100%;
  object-fit: contain;
}

@keyframes show {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
}

.dragon-name-enter-active {
  animation: show 1s;
  animation-fill-mode: forwards;
}
.dragon-name-leave-active {
  display: none;
}
</style>
