import { ref } from "vue";

import { timelimit, timedelta } from "./config";

let timerId = -1;
let callback = () => {};

export const timeRemaining = ref(0);

export const timerStart = () => {
  timeRemaining.value = timelimit;

  timerId = setInterval(() => {
    timeRemaining.value -= timedelta;
    if (timeRemaining.value <= 0) {
      callback();
      timerStop();
    }
  }, timedelta);
};

export const timerStop = () => {
  clearInterval(timerId);
};

export const onTimelimit = (effect: () => void) => {
  callback = effect;
};
