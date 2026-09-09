<template>
  <Teleport to="body">
    <Transition name="demo-fade">
      <div
        v-if="src"
        class="fixed inset-0 z-[999999999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
        role="dialog"
        aria-modal="true"
        :aria-label="title ? `${title} demo video` : 'Project demo video'"
        @click.self="close"
      >
        <div class="relative flex w-full max-w-6xl flex-col gap-3">
          <div class="flex items-center justify-between gap-4">
            <p
              class="heading-6 text-flax-smoke-200 font-title! font-bold tracking-wide uppercase"
            >
              {{ title }}
            </p>
            <button
              ref="closeBtn"
              type="button"
              aria-label="Close demo"
              class="text-flax-smoke-200 hover:bg-accent hover:text-flax-smoke-950 border-flax-smoke-500 flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors duration-300"
              @click="close"
            >
              <svg
                viewBox="0 0 24 24"
                class="size-5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <!--
            preload="none" matters: these full walkthroughs are megabytes each,
            and nothing should be fetched until someone actually opens the modal.
          -->
          <video
            :src="src"
            class="max-h-[78vh] w-full rounded-lg bg-black"
            controls
            autoplay
            playsinline
            preload="none"
          ></video>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { nextTick, onBeforeUnmount, ref, watch } from 'vue';
  import { lenis } from '@/main';

  const props = defineProps<{ src?: string; title?: string }>();
  const emit = defineEmits(['close']);
  const closeBtn = ref<HTMLButtonElement>();

  const close = () => emit('close');

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
  };

  // Lenis drives the page scroll, so pause it while the modal is open or the
  // page keeps scrolling behind the overlay.
  watch(
    () => props.src,
    async (open) => {
      if (open) {
        lenis.stop();
        window.addEventListener('keydown', onKey);
        await nextTick();
        closeBtn.value?.focus();
      } else {
        lenis.start();
        window.removeEventListener('keydown', onKey);
      }
    },
  );

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKey);
    lenis.start();
  });
</script>

<style scoped>
  .demo-fade-enter-active,
  .demo-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .demo-fade-enter-from,
  .demo-fade-leave-to {
    opacity: 0;
  }
</style>
