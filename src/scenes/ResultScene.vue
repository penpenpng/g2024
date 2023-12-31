<script setup lang="ts">
import TitleScene from "./TitleScene.vue";
import GameScene from "./GameScene.vue";
import { score } from "../lib/game";
import { Scene } from "../lib/engine";
import { tweet } from "../lib/twitter";

const getResult = () =>
  `あけましておめでとう！私はたつづくりで ${score.value} 点獲得したよ！ ${window.location.href}`;

const clipboardAvailable = !!navigator.clipboard;
const copyResult = () => {
  navigator.clipboard.writeText(getResult());
};
const tweetResult = () => tweet(getResult());
</script>

<template>
  <div class="title-scene">
    <h1>🐉謹賀新年🐉</h1>
    <p>ことしもよろしくおねがいします</p>

    <h2>すこあ</h2>
    <p>{{ score }}</p>

    <div class="actions">
      <button @click="Scene.go(GameScene)">もういちど</button>
      <div>
        <button @click="tweetResult">ツイート</button>
        <button v-if="clipboardAvailable" @click="copyResult">
          結果をコピー
        </button>
      </div>

      <button @click="Scene.go(TitleScene)">タイトルに戻る</button>
    </div>
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
  padding-block: 40px;
}

.grid-left {
  grid-column: 1;
}

.grid-right {
  grid-column: 2;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 50px;
}

.actions > * {
  margin-block: 3px;
}

.actions button {
  margin-inline: 2px;
}
</style>
