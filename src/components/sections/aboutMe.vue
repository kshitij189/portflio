<template>
  <section
    id="about-me-section"
    class="common-padding text-flax-smoke-200 relative z-10 overflow-y-clip rounded-b-3xl bg-[#0A0F07] shadow-2xl will-change-auto sm:mt-0"
  >
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-2"
          stroke="currentColor"
          fill="none"
          stroke-width="1.25"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hide-on-mobile m-0 size-20 -translate-x-full p-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </div>

      <h3
        id="little-bit-about-me"
        v-html="aboutMe"
        class="heading-3 lg:heading-2 section-heading col-span-full leading-none font-extrabold uppercase md:col-span-8 md:col-start-6"
      ></h3>
    </div>

    <div class="padding-y md:column-gap mt-6 grid grid-cols-12">
      <div
        class="pointer-events-none col-span-full content-end rounded-lg select-none md:col-span-4"
      >
        <!--
          `mix-blend-screen` was removed on purpose: it exists to dissolve a
          cutout into the black section, but this is a photographic image with a
          bright background, so the blend would erase the dark clothing while
          leaving the scenery solid.
          To go back to the site's monochrome treatment, add `grayscale` below.
        -->
        <img
          :src="profile2"
          class="aspect-[1/1.5] rounded-lg object-cover object-center brightness-95"
          alt="Kshitij Tripathi standing on a misty green hillside"
        />
      </div>
      <div class="col-span-11 mt-10 md:col-span-8 md:col-start-6">
        <p
          class="heading-4 relative w-full max-w-[40ch] leading-snug font-medium text-balance"
        >
          I build the parts of a product that users never see but always feel —
          async pipelines, task queues and retrieval systems that stay fast and
          correct when the load stops being polite.
        </p>

        <div
          class="text-flax-smoke-300 mt-[5%] flex justify-start gap-10 sm:gap-20"
        >
          <p class="heading-6 text-flax-smoke-300/85 text-center text-nowrap">
            ( ABOUT ME )
          </p>
          <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
            I'm a recent Computer Science graduate from IIIT Nagpur, most
            recently a backend SDE intern at Zhecker Technologies, where I built
            Celery and Redis pipelines that processed large batches of documents
            without blocking anyone. I like problems where correctness under
            concurrency actually matters. <br /><br />
            When I'm not shipping backends, I'm usually deep in a competitive
            programming contest — 350+ problems solved and Knight on LeetCode.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    animateSplitText,
    xToZero,
    animateAboutMeSectionLeave,
  } from '@/animations';
  import { profile2 } from '@/assets/images';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  // textSplitterIntoChar splits on spaces and gives each result its own
  // non-wrapping block, i.e. one line. The pairs below are joined with a
  // non-breaking space so "Backend Development" stays on one line instead of
  // breaking in two. Longer lines need a smaller heading size to fit the
  // column — see the class list on the h3 above.
  const NB = '\u00A0'; // non-breaking space keeps each pair on one line
  const ABOUT_HEADING =
    'Backend' +
    NB +
    'Development, Distributed' +
    NB +
    'Systems, Agentic' +
    NB +
    'Systems/';
  const aboutMe = ref(ABOUT_HEADING);

  // const initialPath = ref(`M0 0H${width.value}  V${height.value} H0 Z`);
  // const targetPath = ref(
  //   `M0 0H${width.value}L${width.value * 0.9} ${height.value}H${width.value * 0.1}L0 0Z`,
  // );

  onBeforeMount(() => {
    aboutMe.value = textSplitterIntoChar(ABOUT_HEADING, true, true);
  });

  onMounted(() => {
    animateSplitText(
      '#little-bit-about-me .letters',
      '#little-bit-about-me',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-2');
      },
    );

    animateAboutMeSectionLeave('#about-me-section');
  });
</script>
