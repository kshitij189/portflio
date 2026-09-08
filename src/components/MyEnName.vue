<template>
  <!--
    The hero wordmark. The original was 8 hand-traced SVG paths spelling the
    previous owner's name; this renders one span per letter instead so it can be
    changed by editing `name` below. Each letter keeps the `letter-path` class and
    the `translate-y-full` start state, which is what `animateHeroNav` staggers in
    (see src/animations/index.ts).
  -->
  <div
    class="text-flax-smoke-900 flex w-full items-end justify-between overflow-hidden"
  >
    <span
      v-for="(char, i) in letters"
      :key="i"
      class="letter-path font-title! inline-block translate-y-full leading-[0.78] font-bold -tracking-wider will-change-auto"
      >{{ char }}</span
    >
  </div>
</template>

<script setup lang="ts">
  // Change this to render a different wordmark.
  const name = 'KSHITIJ';
  const letters = name.split('');
</script>

<style scoped>
  /*
    Keep this roughly in line with the original SVG wordmark, whose viewBox
    locked its height to ~12.4% of its width. Going much larger makes the hero
    content (bottom-aligned in a min-h-svh box) grow tall enough to collide with
    the absolutely-positioned header.
  */
  span {
    font-size: clamp(2.5rem, 13.5vw, 18rem);
  }
</style>
