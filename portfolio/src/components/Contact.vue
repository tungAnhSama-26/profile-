<template>
  <section class="bg-[#0b0f14] py-28 text-white" id="contact">
    <div class="max-w-5xl mx-auto px-6 text-center">

      <h2 class="text-5xl font-bold mb-4">
        Contact<span class="text-teal-400">.</span>
      </h2>

      <p class="text-gray-400 mb-16">Please contact me if you need any recommendations.</p>

      <div class="grid md:grid-cols-2 gap-6">

        <a
          v-for="c in contacts"
          :key="c.name"
          :href="c.link"
          target="_blank"
          class="flex items-center justify-between 
                 border border-gray-700 
                 rounded-xl px-6 py-4 
                 hover:border-teal-400 
                 hover:bg-[#111827] 
                 transition duration-300 group"
        >

          <div class="flex items-center gap-4">
            <span 
              v-html="c.icon"
              class="text-xl text-gray-400 group-hover:text-white transition"
            ></span>

            <span class="text-gray-300 group-hover:text-white transition">
              {{ c.name }}
            </span>
          </div>

          <ArrowUpRight
            class="w-5 h-5 text-gray-500 
                   group-hover:text-teal-400 
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 
                   transition duration-300"
          />
        </a>

      </div>

      <div class="mt-20 text-gray-500 text-sm">
        ©2026 | Tung Anh Tran Vu
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowUpRight } from "lucide-vue-next";

const contacts = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61574689854088",
    icon: '<i class="fa-brands fa-facebook"></i>',
  },
  {
    name: "Github",
    link: "https://github.com/tungAnhSama-26",
    icon: '<i class="fa-brands fa-github"></i>',
  },
  {
    name: "Email",
    link: "mailto:tunganht26@gmail.com",
    icon: '<i class="fa-solid fa-envelope"></i>',
  },
  {
    name: "Discord",
    link: "https://discord.com/users/1260212949411434628",
    icon: '<i class="fa-brands fa-discord"></i>',
  },
];
</script>
