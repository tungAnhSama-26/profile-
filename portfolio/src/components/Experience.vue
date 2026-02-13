<template>
  <section id="experience" class="bg-[#0b0f14] py-28 text-white">
    <div class="max-w-5xl mx-auto px-6">
      <h1 class="text-5xl font-bold text-center mb-20">Experience.</h1>

      <div class="relative border-2 border-zinc-800">
        <div v-for="exp in experiences" :key="exp.id" class="mb-16 ml-8 group">
          <span
            class="absolute left-3 w-6 bg-[#0b0f14] border-2 border-teal-400 rounded-full group-hover:scale-110 transition"
          ></span>
          <p class="text-teal-400 text-sm mb-2">{{ exp.date }}</p>
          <h3
            class="text-x1 font-semibold group-hover text-teal-400 transition flex items-center gap-2"
          >
            {{ exp.title }}
          </h3>
          <p class="text-zinc-400 mt-3 leading-relaxed">
            {{ exp.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    id: 1,
    date: "Dec 2025 - Jan 2026",
    title: "Chess Board Game | Personal Project",
    description:
      "Built a fully functional chess game using Vue.js and Vanilla JavaScript following Object-Oriented principles. Developed custom classes for game logic, implemented complete rule validation (castling, promotion, captures), and integrated reactive state management with Vue. Focused on clean architecture, reusable functions, and handling complex gameplay scenarios.",
  },
  {
    id: 2,
    date: "Feb 10th 2026 - Feb 19th 2026",
    title: "Portfolio project",
    description:
      "Designed and developed a responsive personal portfolio website using Vue.js 3, Tailwind CSS, and Vite. Built reusable components and implemented smooth animations, interactive UI elements, and a dynamic project showcase section. Focused on clean design, performance optimization, and modern frontend development practices.",
  },

  
];
</script>
