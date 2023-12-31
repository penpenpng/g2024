import { reactive, computed, toRaw } from "vue";
import TitleScene from "../../scenes/TitleScene.vue";
import ResultScene from "../../scenes/ResultScene.vue";
import { Scene, Audio } from "../engine";
import { DragonPartsCard, draw, loadImageAssets } from "./cards";
import { onTimelimit, timeRemaining, timerStart, timerStop } from "./timer";
import {
  reloadPenalty,
  scoreFakeDragon,
  scoreTornado,
  scoreTrueDragon,
  timelimit,
  timerecover,
} from "./config";

declare global {
  interface AudioAssets {
    bgm: void;
    make: void;
    toggle: void;
    wind: void;
    tornado: void;
  }
}

export const setupGameApp = async () => {
  Scene.go(TitleScene);

  await loadImageAssets();
  await Audio.load({
    bgm: {
      gain: 0.1,
      src: import("../../assets/maou_bgm_fantasy04_loop.mp3"),
      loop: true,
    },
    make: {
      gain: 0.1,
      src: import("../../assets/maou_se_system41.mp3"),
    },
    toggle: {
      gain: 0.1,
      src: import("../../assets/maou_se_system21.mp3"),
    },
    wind: {
      gain: 0.1,
      src: import("../../assets/maou_se_magic_wind02.mp3"),
    },
    tornado: {
      gain: 0.4,
      src: import("../../assets/maou_se_magic_wind03.mp3"),
    },
  });
};

export const setupGame = () => {
  state.score = 0;
  state.slotted = [];
  state.dragonConsumed = false;
  state.recoverd = 0;
  resetHands();

  timerStart();
  Audio.play("bgm");

  onTimelimit(() => {
    timerStop();
    Audio.stop("bgm");
    Scene.go(ResultScene);
  });
};

interface GameState {
  score: number;
  slotted: DragonParts[];
  hands: DragonPartsCard[];
  dragonConsumed: boolean;
  recoverd: number;
}

export type DragonParts = DragonPartsCard | "dragon" | "tornado";

const state = reactive<GameState>({
  score: 0,
  slotted: [],
  hands: [],
  dragonConsumed: false,
  recoverd: 0,
});

const canMakeDragon = (
  parts: DragonParts[],
  { exactOrder }: { exactOrder: boolean }
): boolean => {
  for (let i = 0; i < parts.length; i++) {
    const x = parts[i];
    if (x === "dragon" || x === "tornado" || x.name.includes("たつ"))
      return true;

    for (let j = i + 1; j < parts.length; j++) {
      const y = parts[j];
      if (y === "dragon" || y === "tornado" || y.name.includes("たつ"))
        return true;

      if (x.name.endsWith("た") && y.name.startsWith("つ")) return true;
      if (!exactOrder) {
        if (y.name.endsWith("た") && x.name.startsWith("つ")) return true;
      }
    }
  }

  return false;
};
const getName = (parts: DragonParts | undefined) => {
  if (!parts) {
    return "";
  }
  if (parts === "dragon") {
    return "たつ";
  }
  if (parts === "tornado") {
    return "たつまき";
  }
  return parts.name;
};
const remove = (arr: DragonParts[], needle: DragonParts) => {
  const index = arr.findIndex((e) => toRaw(e) === toRaw(needle));
  if (index >= 0) {
    arr.splice(index, 1);
  }
};
const replace = (arr: DragonParts[], needle: DragonParts, x: DragonParts) => {
  const index = arr.findIndex((e) => toRaw(e) === toRaw(needle));
  if (index >= 0) {
    arr.splice(index, 1, x);
  }
};
const resetHands = () => {
  state.hands = [draw(), draw(), draw(), draw(), draw(), draw()];
};

export const hands = computed(() => state.hands);
export const isSlotted = (parts: DragonParts) =>
  computed(() => {
    const needle = toRaw(parts);
    for (const e of state.slotted) {
      if (toRaw(e) === needle) return true;
    }
    return false;
  });
export const slotted = computed(() => state.slotted);

export const score = computed(() => state.score);
export const showDragonInScore = computed(
  () => !state.dragonConsumed && !state.slotted.includes("dragon")
);

export const makeDragonAvailable = computed(() =>
  canMakeDragon(slotted.value, { exactOrder: true })
);
const tornadoAvailable = computed(
  () => !canMakeDragon(state.hands, { exactOrder: false })
);

export const special = computed<"normal" | "tornado" | "none">(() => {
  if (tornadoAvailable.value) {
    if (state.slotted.includes("tornado")) {
      return "none";
    } else {
      return "tornado";
    }
  } else {
    return "normal";
  }
});

export const setDragon = (): void => {
  if (state.slotted.length >= 2) {
    return;
  }

  Audio.play("toggle");
  state.slotted.push("dragon");
};
export const setHand = (card: DragonPartsCard): void => {
  if (state.slotted.length >= 2) {
    return;
  }

  Audio.play("toggle");
  state.slotted.push(card);
};
export const makeDragon = (): string => {
  timeRemaining.value = Math.min(
    timeRemaining.value + (timerecover * Math.max(30 - state.recoverd, 1)) / 30,
    timelimit
  );
  state.recoverd++;

  if (state.slotted.includes("dragon")) {
    state.score += scoreTrueDragon;
    state.dragonConsumed = true;
  }

  if (state.slotted.includes("tornado")) {
    Audio.play("tornado");
    state.score += scoreTornado;
    resetHands();
  } else {
    Audio.play("make");
    state.score += scoreFakeDragon;
    for (const slotted of state.slotted) {
      replace(state.hands, slotted, draw());
    }
  }

  const dragon = `${getName(state.slotted[0])}${getName(state.slotted[1])}`;
  state.slotted = [];
  return dragon;
};
export const unset = (parts: DragonParts): void => {
  Audio.play("toggle");
  remove(state.slotted, parts);
};
export const useSpecial = (): void => {
  if (special.value === "tornado" && state.slotted.length < 2) {
    state.slotted.push("tornado");
  } else if (special.value === "normal") {
    state.slotted = [];
    timeRemaining.value -= reloadPenalty;
    Audio.play("wind");
    resetHands();
  }
};
