export const onTap = (callback: () => void) => {
  let tapping = false;

  const tapstart = () => {
    tapping = true;
  };
  const tapend = () => {
    if (tapping) {
      tapping = false;
      callback();
    }
  };

  return {
    mousedown: tapstart,
    touchstart: tapstart,
    mouseup: tapend,
    touchend: tapend,
  };
};
