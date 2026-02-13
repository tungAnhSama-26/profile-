<template>
    <h1 class="text-5xl font-bold text-center mb-20 text-white">Skills.</h1>
     <div class="overflow-hidden border-y border-gray-200 py-8 bg-white" id="skills">
  <div class="marquee">
    <div class="marquee-content">
      <!-- Loop 1 -->
      <span v-for="item in skills" :key="item" class="skill" v-html="item"></span>
      <!-- Loop 2 (clone) -->
      <span v-for="item in skills" :key="item + '-clone'" class="skill" v-html="item"></span>

       <!-- Loop 3 (clone) -->
      <span v-for="item in skills" :key="item + '-clone'" class="skill" v-html="item"></span>
    </div>
  </div>
</div>
</template>

<script setup>
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
  '<img class="h-8 w-auto opacity-70 hover:opacity-100 hover:scale-110 transition"src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Tailwind"/>'
]
</script>

<style scoped>
.marquee {
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%, 
    transparent
  );
}

.marquee-content {
  display: inline-flex;
  width: max-content;
  gap: 60px;
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.skill {
  font-size: 50px;
  color: #374151;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill img { 
   height: 40px;
  width: 40px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.3);
  transition: 0.3s;
}
.skill:hover {
  color: #14b8a6;
  transform: scale(1.2);
}
</style>

