<script setup lang="ts">
import GameScene from "./GameScene.vue";
import { Scene, Audio } from "../lib/engine";

const volume = Audio.volume;
</script>

<template>
  <div class="title-scene">
    <h1>たつづくり</h1>
    <h2>おはなし</h2>
    <p>
      「2024年は辰年！<br />
      新年を辰と一緒にお祝いしよう！」<br />
      だから辰を連れてくるように言われたあなた。<br />
      でも辰なんてどこにいるわけもありません。<br />
      ないなら作ればいいんですよね？<br />
    </p>

    <h2>あそびかた</h2>
    <div>省略。</div>

    <h2>音量</h2>
    <div>
      <input v-model="volume" type="range" min="0" max="1" step="0.05" />
    </div>

    <div class="grid">
      <div class="grid-left">画像</div>
      <div class="grid-right">
        <a target="_blank" href="https://www.irasutoya.com/">いらすとや</a>
      </div>
      <div class="grid-left">音楽</div>
      <div class="grid-right">
        <a target="_blank" href="https://maou.audio/">魔王魂</a>
      </div>
    </div>

    <button @click="Scene.go(GameScene)">はじめる</button>
  </div>
</template>

<style scoped>
.title-scene {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 30px;
  font-weight: bolder;
  margin-top: 40px;
  padding: 0;
}

h2 {
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0;
}

p {
  text-align: center;
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: 60px max-content;
  grid-auto-rows: min-content;
  padding-block: 20px;
}

.grid-left {
  grid-column: 1;
}

.grid-right {
  grid-column: 2;
}
</style>
