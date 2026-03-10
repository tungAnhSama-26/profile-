<script setup>
import { ref, onMounted } from "vue";
import { User, CodeXml, Star, Mail } from "lucide-vue-next";

const activeHash = ref('#about');

const navLinks = [
  { path: "#about", label: "About me", icon: User },
  { path: "#skills", label: "Skills", icon: CodeXml },
  { path: "#experience", label: "Project", icon: Star },
  { path: "#contact", label: "Contact", icon: Mail },
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeHash.value = `#${entry.target.id}`;
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  // Observe all sections
  navLinks.forEach(link => {
    const el = document.querySelector(link.path);
    if (el) observer.observe(el);
  });
});
</script>

<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50">
    <div class="bg-[#1e2229] rounded-2xl px-6 py-3 
                shadow-[8px_8px_16px_#14171c,-8px_-8px_16px_#282d36] 
                border border-white/5">
      <div class="flex items-center justify-center space-x-2 sm:space-x-8">
        <a v-for="item in navLinks" 
           :key="item.path" 
           :href="item.path" 
           class="nav-item"
           :class="{ 'is-active': activeHash === item.path }">
          <component :is="item.icon" class="w-4 h-4" />
          <span class="hidden sm:inline">{{ item.label }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item {
  @apply flex items-center gap-2 rounded-xl px-4 py-2
         text-sm font-medium text-gray-400 transition-all duration-300;
}

/* Custom Active Class for Neumorphism */
.is-active {
  @apply text-teal-400 shadow-[inset_4px_4px_8px_#14171c,inset_-4px_-4px_8px_#282d36];
}

/* Hover effect for non-active items */
.nav-item:not(.is-active):hover {
  @apply text-gray-200 shadow-[4px_4px_8px_#14171c,-4px_-4px_8px_#282d36];
}
</style>