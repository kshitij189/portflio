<template>
  <section id="works" class="common-padding mb-20">
    <div class="flex flex-col">
      <h3
        id="selectedWorks"
        v-html="selectedWorks"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>
      <p
        class="heading-1 text-flax-smoke-400 text-opacity-50 hidden w-4/5 text-end font-extrabold sm:block"
      >
        ( {{ selectedWorksProps.length }} )
      </p>

      <div
        id="selected-works-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          (
          <span class="inline sm:hidden">{{ selectedWorksProps.length }} </span>
          PROJECTS )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          Backend systems I designed and built end to end — async pipelines,
          retrieval engines and ledgers where correctness under load was the
          hard part.
        </p>
      </div>
    </div>

    <div
      class="sm:column-gap relative mt-12 grid size-full grid-cols-12 lg:mt-[10%]"
    >
      <div
        class="text-flax-smoke-100 sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] leading-[0.8] font-semibold md:flex"
      >
        <span class="font-title! relative -tracking-wider">0</span>
        <span
          id="index"
          class="font-title! relative -tracking-wider will-change-transform"
          >{{ index + 1 }}.</span
        >
      </div>
      <aside
        @mouseenter="showCursor"
        @mouseleave="hideCursor"
        class="relative col-span-full flex flex-col space-y-10 md:col-span-7"
      >
        <div
          v-for="(work, i) in selectedWorksProps"
          :key="i"
          class="work-card @container"
        >
          <a class="group" target="_blank" :href="work.url">
            <div
              class="flex-center relative aspect-square overflow-clip rounded-lg"
            >
              <img
                alt="work-background"
                loading="lazy"
                class="absolute size-full object-cover select-none"
                :src="work.imageBg"
              />
              <div
                class="flex-center z-10 aspect-4/3 size-full overflow-clip rounded-lg object-cover"
              >
                <!-- autoplay="false" -->
                <video
                  ref="videoRefs"
                  :src="work.videoSrc"
                  muted
                  :autoplay="false"
                  preload="metadata"
                  type="video/webm"
                  class="size-[80%] rounded-md object-contain blur transition-all duration-500 ease-in-out"
                ></video>
              </div>
            </div>
            <div>
              <p class="heading-6 font-title! mt-[2%] mb-[1%] leading-none">
                {{ work.category }}
              </p>
              <div class="items-center justify-between sm:flex">
                <h3 class="heading-3 font-title! font-bold uppercase">
                  {{ work.name }}
                </h3>
                <div class="flex flex-wrap gap-1.5 select-none">
                  <!--
                    Sits inside the card's <a>, so the click has to be stopped
                    or it would also follow the project link.
                  -->
                  <button
                    v-if="work.demoVideo"
                    type="button"
                    class="bg-accent text-flax-smoke-950 border-accent hover:text-accent flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 font-bold transition-[background-color,color] duration-500 ease-in-out hover:bg-transparent"
                    @click.prevent.stop="openDemo(work)"
                  >
                    <span aria-hidden="true">&#9654;</span>
                    <span>Watch demo</span>
                  </button>
                  <p
                    class="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out"
                    v-for="tag in work.tags"
                    :key="tag"
                  >
                    <span>{{ tag }}</span>
                  </p>
                  <p
                    class="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-900 hover:text-flax-smoke-300 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out hover:bg-transparent"
                  >
                    <span>{{ work.year }}</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </aside>
    </div>

    <DemoModal
      :src="activeDemo?.demoVideo"
      :title="activeDemo?.name"
      @close="activeDemo = null"
    />
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref, useTemplateRef } from 'vue';
  import gsap from 'gsap';
  import { useWindowSize } from '@vueuse/core';
  import {
    work1,
    work1Full,
    work2,
    work2Full,
    work3,
    work3Full,
    work4,
    work4Full,
    work5,
    work5Full,
  } from '@/assets/videos';
  import { workBg1, workBg2, workBg3, workBg4, workBg5 } from '@/assets/images';
  import { DemoModal } from '../design';

  type Work = {
    name: string;
    category: string;
    tags: string[];
    videoSrc: string;
    imageBg: string;
    url: string;
    year: string;
    demoVideo?: string;
  };

  const activeDemo = ref<Work | null>(null);
  const openDemo = (work: Work) => {
    activeDemo.value = work;
  };
  const videoRefs = useTemplateRef<HTMLVideoElement[]>('videoRefs');

  const isSmallScreen = computed(() => {
    return useWindowSize().width.value < 768;
  });
  const index = ref(0);
  const selectedWorks = ref('Selected Works /');

  const tl = gsap
    .timeline({ defaults: { duration: 0.25 } })
    .to(['#cursor', '#inner'], {
      scale: 1,
      opacity: 1,
    })
    .paused(true);

  const showCursor = () => {
    tl.play();
  };
  const hideCursor = () => {
    tl.reverse();
  };

  const selectedWorksProps: Work[] = [
    {
      name: 'DocProcessor',
      category: 'Async Pipeline & RAG',
      tags: ['FastAPI', 'Celery', 'ChromaDB'],
      videoSrc: work1,
      imageBg: workBg1,
      url: 'https://doc-processor-m0cm.onrender.com',
      year: '2026',
      demoVideo: work1Full,
    },
    {
      name: 'CortexMCP',
      category: 'Autonomous Research Engine',
      tags: ['FastAPI', 'Redis', 'Gemini'],
      videoSrc: work2,
      imageBg: workBg2,
      url: 'https://cortexmcp.onrender.com',
      year: '2026',
      demoVideo: work2Full,
    },
    {
      name: 'SplitEase',
      category: 'Full-Stack & AI',
      tags: ['Django', 'PostgreSQL', 'Gemini'],
      videoSrc: work3,
      imageBg: workBg3,
      url: 'https://splitease-frontend-tzjt.onrender.com',
      year: '2026',
      demoVideo: work3Full,
    },
    {
      name: 'Payout System',
      category: 'Backend & Financial Ledger',
      tags: ['Node.js', 'Express', 'PostgreSQL'],
      videoSrc: work4,
      imageBg: workBg4,
      // No public deployment for this one, so the card links to the repo.
      url: 'https://github.com/kshitij189/payout-system',
      year: '2025',
      demoVideo: work4Full,
    },
    {
      name: 'CLI Login System',
      category: 'CLI Tool & Cryptography',
      tags: ['Go', 'TOTP 2FA', 'Docker'],
      videoSrc: work5,
      imageBg: workBg5,
      // CLI tool, so there is nothing to deploy - the card links to the repo.
      url: 'https://github.com/kshitij189/cli-login-system',
      year: '2025',
      demoVideo: work5Full,
    },
  ];

  // Reusable function to handle forward scroll animation
  const createForwardTimeline = (
    index: any,
    i: any,
    selectedWorksProps: any[],
  ) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3 },
    });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        index.value = Math.min(i, selectedWorksProps.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });

    return tl;
  };

  // Reusable function to handle backward scroll animation
  const createBackwardTimeline = (index: any, i: any) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        index.value = Math.max(i, 0);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });

    return tl;
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        video.play();
        video.classList.remove('blur');
      }
    });
  };

  const stopAllVideos = () => {
    videoRefs.value?.map((video: HTMLVideoElement) => {
      if (video && !video.paused) {
        video.pause();
        video.currentTime = 0; // Reset video to the start
      }
    });
  };
  onBeforeMount(() => {
    selectedWorks.value = textSplitterIntoChar('Selected Works / ', true);
  });

  onMounted(() => {
    stopAllVideos();

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75, // Trigger when 75% of the video is visible
    });

    // Observe each video element
    videoRefs.value?.forEach((video) => {
      observer.observe(video);
    });

    animateSplitText(
      '#selectedWorks .letters',
      '#selected-works-text',
      0.7,
      0.01,
      0,
    );

    // Apply GSAP animations to each div
    if (!isSmallScreen.value)
      gsap.utils.toArray('.work-card').forEach((div: any, i: any) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            // start: 'top 40%',
            start: 'top 25%',
            // end: 'bottom 40%',
            end: 'bottom 25%',
            scrub: 0.01,
            // markers: true,
            onLeaveBack: () => {
              // Backward scroll animation
              if (index.value !== 0) {
                gsap.to('#index', {
                  yPercent: 100,
                  duration: 0.3,
                  ease: 'power4.inOut',
                  onComplete: () => {
                    createBackwardTimeline(index, i - 1);
                  },
                });
              }
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            // Forward scroll animation
            if (index.value !== selectedWorksProps.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(index, i + 1, selectedWorksProps);
                },
              });
            }
          },
        });
      });
  });
</script>
