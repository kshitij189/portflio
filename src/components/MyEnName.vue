<template>
  <!--
    The hero wordmark. The original was 8 hand-traced SVG paths spelling the
    previous owner's name; this renders one span per letter instead so it can be
    changed by editing `name` below. Each letter keeps the `letter-path` class and
    the `translate-y-full` start state, which is what `animateHeroNav` staggers in
    (see src/animations/index.ts).
  -->
  <!-- w-fit, not w-full: the block hugs the letters so the star that follows
       it in the hero sits beside the wordmark rather than at the far edge. -->
  <div
    class="text-flax-smoke-900 flex w-fit items-end justify-start overflow-hidden"
  >
    <span
      v-for="(char, i) in letters"
      :key="i"
      class="letter-path font-title! inline-block translate-y-full leading-[0.78] font-bold will-change-auto"
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
    The letters sit at their natural spacing rather than being spread across
    the full width, so the wordmark reads as one word instead of seven letters.

    Size is capped deliberately: the hero content is bottom-aligned inside a
    min-h-svh box, so a taller wordmark pushes its own top upward and will
    collide with the absolutely-positioned header. 15vw leaves roughly 30px of
    clearance at 1920x870 — do not raise it without re-checking that gap.
  */
  span {
    font-size: clamp(2.5rem, 15vw, 20rem);
  }
</style>
