<template>
  <section id="experience" class="bg-[#1e2229] py-28 text-white">
    <div class="max-w-5xl mx-auto px-6">
      <h1 class="text-5xl font-bold text-center mb-20">
        Experience<span class="text-teal-400">.</span>
      </h1>

      <div
        class="relative ml-4 border-l-4 border-[#14171c] shadow-[1px_0_0_#282d36]"
      >
        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="mb-16 ml-8 group cursor-default"
        >
          <span
            class="absolute -left-[14px] w-6 h-6 bg-[#1e2229] rounded-full shadow-[4px_4px_8px_#14171c,-4px_-4px_8px_#282d36] border border-teal-400/30 group-hover:border-teal-400 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all duration-500 z-10"
          ></span>

          <div
            class="p-8 bg-[#1e2229] rounded-3xl shadow-[8px_8px_16px_#14171c,-8px_-8px_16px_#282d36] group-hover:shadow-[12px_12px_24px_#101217,-12px_-12px_24px_#303641] group-hover:-translate-y-2 group-hover:translate-x-1 transition-all duration-500 ease-out border border-white/5"
          >
            <p
              class="text-teal-400 font-mono text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
            >
              {{ exp.date }}
            </p>

            <h3
              class="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300"
            >
              {{ exp.title }}
            </h3>

            <p
              class="text-gray-400 mt-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
            >
              {{ exp.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const experiences = ref([
  {
    id: 1,
    date: "Feb 10th 2026 - Feb 19th 2026",
    title: "Portfolio project",
    description:
      "Designed and architected a responsive portfolio leveraging Vue.js 3, Tailwind CSS, and Vite. Engineered reusable Neumorphic components and integrated smooth animations for an interactive user experience. Deployed and maintained via Vercel.",
  },
  {
    id: 2,
    date: "Dec 2025 - Jan 2026",
    title: "Chess Board Game",
    description:
      "Designed and developed a responsive personal portfolio website using Vue.js 3, Tailwind CSS, and Vite. Built reusable components and implemented smooth animations, interactive UI elements, and a dynamic project showcase section. Focused on clean design, performance optimization, and modern frontend development practices.",
  },
]);
</script>
