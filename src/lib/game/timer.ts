import { ref } from "vue";

import { timelimit } from "./config";

let timerId = -1;
let callback = () => {};

export const timeRemaining = ref(0);

export const start = () => {
  timeRemaining.value = timelimit;

  timerId = setInterval(() => {
    timeRemaining.value--;
    if (timeRemaining.value <= 0) {
      callback();
      stop();
    }
  }, 1000);
};

export const stop = () => {
  clearInterval(timerId);
};

export const onTimelimit = (effect: () => void) => {
  callback = effect;
};
