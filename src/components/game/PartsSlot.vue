<script setup lang="ts">
import SlottedDragonParts from "./SlottedDragonParts.vue";
import { slotted } from "../../lib/game";
</script>

<template>
  <div>
    <SlottedDragonParts :parts="slotted[0]" />
    <SlottedDragonParts :parts="slotted[1]" />
  </div>
</template>
