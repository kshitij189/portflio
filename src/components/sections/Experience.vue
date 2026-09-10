<template>
  <section id="experience" class="common-padding mb-20">
    <div
      class="border-flax-smoke-300 grid w-full grid-cols-12 border-b-[1px] pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h3
        id="experience-heading"
        v-html="experienceHeading"
        class="heading-1 max-sm:heading-2 text-flax-smoke-950 col-span-full leading-none font-bold uppercase"
      ></h3>

      <div
        id="experience-text"
        class="md:column-gap text-flax-smoke-800 col-span-full mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 col-span-4 text-center text-nowrap uppercase lg:col-start-2"
        >
          ( {{ roles.length }} {{ roles.length === 1 ? 'Role' : 'Roles' }} )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          Where I've built things, and what I was actually responsible for while
          I was there.
        </p>
      </div>
    </div>

    <!-- Work -->
    <div class="mt-12 flex flex-col lg:mt-[8%]">
      <article
        v-for="(item, i) in roles"
        :key="`role-${i}`"
        class="experience-card border-flax-smoke-400/60 md:column-gap grid grid-cols-12 border-b py-10 last:border-b-0"
      >
        <div class="col-span-full md:col-span-4">
          <p
            class="heading-6 text-flax-smoke-600 font-mono font-medium text-nowrap"
          >
            {{ item.period }}
          </p>
          <p
            class="heading-6 text-flax-smoke-500 mt-1 font-medium tracking-wider uppercase"
          >
            {{ item.location }}
          </p>
        </div>

        <div class="col-span-full mt-4 md:col-span-8 md:mt-0">
          <h4
            class="heading-3 font-title! text-flax-smoke-950 leading-none font-bold uppercase"
          >
            {{ item.role }}
          </h4>
          <p class="heading-5 text-flax-smoke-700 mt-1 font-semibold">
            {{ item.org }}
          </p>
          <p
            class="heading-6 font-fancy text-flax-smoke-800 mt-5 w-full text-balance sm:max-w-[52ch]"
          >
            {{ item.body }}
          </p>
          <div class="mt-6 flex flex-wrap gap-1.5 select-none">
            <p
              v-for="tag in item.tags"
              :key="tag"
              class="border-flax-smoke-500 text-flax-smoke-700 hover:bg-flax-smoke-500 hover:text-flax-smoke-50 rounded-full border px-4 py-1.5 transition-[background-color,color] duration-500 ease-in-out"
            >
              <span>{{ tag }}</span>
            </p>
          </div>
        </div>
      </article>
    </div>

    <!-- Education is deliberately its own block: a degree is not a role, and
         counting it as one made the "Roles" tally wrong. -->
    <div class="mt-20 lg:mt-[10%]">
      <h4
        class="heading-2 font-title! text-flax-smoke-950 border-flax-smoke-300 w-full border-b pb-4 leading-none font-bold uppercase"
      >
        Education /
      </h4>

      <article
        v-for="(item, i) in education"
        :key="`edu-${i}`"
        class="border-flax-smoke-400/60 md:column-gap grid grid-cols-12 border-b py-10 last:border-b-0"
      >
        <div class="col-span-full md:col-span-4">
          <p
            class="heading-6 text-flax-smoke-600 font-mono font-medium text-nowrap"
          >
            {{ item.period }}
          </p>
          <p
            class="heading-6 text-flax-smoke-500 mt-1 font-medium tracking-wider uppercase"
          >
            {{ item.location }}
          </p>
        </div>

        <div class="col-span-full mt-4 md:col-span-8 md:mt-0">
          <h4
            class="heading-3 font-title! text-flax-smoke-950 leading-none font-bold uppercase"
          >
            {{ item.qualification }}
          </h4>
          <p class="heading-5 text-flax-smoke-700 mt-1 font-semibold">
            {{ item.org }}
          </p>
          <p
            class="heading-6 font-fancy text-flax-smoke-800 mt-5 w-full text-balance sm:max-w-[52ch]"
          >
            {{ item.body }}
          </p>
          <div class="mt-6 flex flex-wrap gap-1.5 select-none">
            <p
              v-for="tag in item.tags"
              :key="tag"
              class="border-flax-smoke-500 text-flax-smoke-700 hover:bg-flax-smoke-500 hover:text-flax-smoke-50 rounded-full border px-4 py-1.5 transition-[background-color,color] duration-500 ease-in-out"
            >
              <span>{{ tag }}</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const experienceHeading = ref('Where I have worked /');

  const roles = [
    {
      role: 'Software Development Engineer Intern — Backend',
      org: 'Zhecker Technologies',
      period: 'Jul 2025 — Dec 2025',
      location: 'Remote',
      body: 'Built asynchronous pipelines that processed large batches of PDFs and images without blocking user interactions, on a Celery and Redis task system supporting parallel execution, retries and fault-tolerant evaluation workflows. Developed the Django services orchestrating data flow between extraction, scoring and result publishing, and tuned job execution to hold up during peak exam uploads.',
      tags: ['Django', 'Celery', 'Redis', 'Python'],
    },
  ];

  const education = [
    {
      qualification: 'B.Tech, Computer Science & Engineering',
      org: 'Indian Institute of Information Technology, Nagpur',
      period: 'Nov 2022 — Jun 2026',
      location: 'Nagpur, India',
      body: 'Specialising in Data Science and Analytics, CGPA 8.11. Coursework across Data Structures & Algorithms, Database Management Systems, Operating Systems, Object-Oriented Programming, Computer Architecture and Computer Networks.',
      tags: ['DSA', 'DBMS', 'Operating Systems', 'Networks'],
    },
  ];

  onBeforeMount(() => {
    experienceHeading.value = textSplitterIntoChar('Where I have worked /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#experience-heading .letters',
      '#experience-text',
      0.7,
      0.01,
      0,
    );
  });
</script>
