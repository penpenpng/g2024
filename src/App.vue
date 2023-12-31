<script setup lang="ts">
import SceneView from "./components/SceneView.vue";
</script>

<template>
  <SceneView />
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
* {
  user-select: none;
}

#app {
  background-color: moccasin;
}
</style>
