<script setup>
import { User, CodeXml, Star, Mail } from "lucide-vue-next";
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow-lg">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex h-16 items-center justify-center">
        <div class="hidden sm:flex space-x-8">
          <router-link to="/#about" class="nav-item">
            <User class="w-4 h-4" />
            <span>About me</span>
          </router-link>

          <router-link to="/#skills" class="nav-item">
            <CodeXml class="w-4 h-4" />
            <span>Skills</span>
          </router-link>

          <router-link to="/#experience" class="nav-item">
            <Star class="w-4 h-4" />
            <span>Project</span>
          </router-link>

          <router-link to="/#contact" class="nav-item">
            <Mail class="w-4 h-4" />
            <span>Contact</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item {
  @apply flex items-center gap-2 rounded-md px-3 py-2
         text-sm font-medium text-gray-300
         hover:text-white hover:bg-white/5 transition;
}
</style>
