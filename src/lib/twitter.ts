export const tweet = (text: string) => {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURI(text)}`);
};
