<template>
  <div>
    <section 
      ref="sectionRef" 
      id="skills"
      :class="[
        'transition-all duration-1000 ease-out py-28 bg-[#1e2229]',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      ]"
    >
      <h1 class="text-5xl font-bold text-center mb-20 text-white">
        Skills<span class="text-teal-400">.</span>
      </h1>

      <div class="overflow-hidden py-12 bg-[#1e2229]">
        <div class="marquee">
          <div class="marquee-content">
            <div v-for="item in skills" :key="item" class="skill-card">
               <span v-html="item"></span>
            </div>
            <div v-for="item in skills" :key="item + '-clone'" class="skill-card">
               <span v-html="item"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const skills = [
  '<i class="fa-brands fa-github"></i>',
  '<i class="fa-brands fa-react"></i>',
  '<i class="fa-brands fa-js"></i>',
  '<i class="fa-brands fa-css3-alt"></i>',
  '<i class="fa-brands fa-html5"></i>',
  '<i class="fa-brands fa-vuejs"></i>',
  '<i class="fa-brands fa-java"></i>',
  '<i class="fa-brands fa-bootstrap"></i>',
  '<img src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000" class="spring-icon" />',
  '<img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Tailwind"/>'
];

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (observer && sectionRef.value) {
        observer.unobserve(sectionRef.value);
      }
    }
  }, {
    threshold: 0.2
  });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.marquee {
  overflow: hidden;
  width: 100%;
  /* Soft fade on the edges of the marquee */
  mask-image: linear-gradient(
    to right,
    transparent,
    black 15%,
    black 85%, 
    transparent
  );
}

.marquee-content {
  display: inline-flex;
  width: max-content;
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.skill-card {
  @apply flex items-center justify-center w-28 h-28 rounded-3xl mx-6
         bg-[#1e2229] text-4xl text-gray-500
         shadow-[8px_8px_16px_#14171c,-8px_-8px_16px_#282d36]
         hover:text-teal-400 hover:scale-105 
         transition-all duration-300 cursor-default;
}

/* Ensure FontAwesome icons size correctly */
:deep(i) {
  font-size: 45px;
}

/* Fix for images/logos like Tailwind and Spring */
:deep(img) { 
  height: 45px;
  width: 45px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.5);
  transition: 0.3s;
}

.skill-card:hover :deep(img) {
  filter: grayscale(0%) opacity(1);
}
</style>