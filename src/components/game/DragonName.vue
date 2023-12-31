<script setup lang="ts">
defineProps<{
  name: string;
}>();

type Token =
  | {
      kind: "dragon";
      text: "たつ";
    }
  | {
      kind: "text";
      text: string;
    };

const tokenize = (text: string): Token[] => {
  const tokens: Token[] = text.split("たつ").flatMap((text) => [
    { kind: "text", text },
    { kind: "dragon", text: "たつ" },
  ]);
  tokens.pop();
  return tokens;
};
</script>

<template>
  <div>
    <span
      v-for="(token, idx) in tokenize(name)"
      :key="idx"
      :class="{ dragon: token.kind === 'dragon' }"
      >{{ token.text }}</span
    >
  </div>
</template>

<style scoped>
.dragon {
  color: red;
  font-weight: bold;
}
</style>
