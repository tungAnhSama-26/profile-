<template>
  <section
    id="about"
    class="bg-[#1e2229] py-16 md:py-24 pb-12 flex items-center justify-center text-white transition-colors duration-500"
  >
    <div class="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1
        class="text-3xl sm:text-4xl font-bold mb-12 flex items-center justify-center"
      >
        <span
          class="font-bold text-zinc-100 opacity-80 hover:opacity-100 transition-opacity cursor-default"
        >
          About me.
        </span>
      </h1>

      <div
        class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
      >
        <div class="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 group">
          <div
            class="w-full h-full bg-[#1e2229] rounded-3xl overflow-hidden shadow-[12px_12px_24px_#14171c,-12px_-12px_24px_#282d36] group-hover:shadow-[18px_18px_30px_#101217,-18px_-18px_30px_#303641] flex items-center justify-center border border-white/5 transition-all duration-500 ease-out transform group-hover:-translate-y-2"
          >
            <img
              :src="avt"
              alt="avatar"
              class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            />
          </div>

          <span
            class="absolute -bottom-5 -right-5 text-4xl sm:text-5xl font-bold text-teal-400 drop-shadow-[4px_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
          >
            &lt;/&gt;
          </span>
        </div>

        <div class="text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl font-bold group cursor-default">
            <span class="hover:text-teal-400 transition-colors duration-300"
              >Tung Anh Tran Vu</span
            >
            <span class="text-teal-400 animate-pulse">.</span>
          </h1>
          <h2
            class="text-2xl sm:text-3xl font-medium text-gray-400 mt-2 hover:text-gray-200 transition-colors"
          >
            Frontend Developer
          </h2>

          <div
            class="flex flex-wrap justify-center md:justify-start gap-5 mt-8"
          >
            <div
              v-for="i in [
                'fa-html5',
                'fa-css3-alt',
                'fa-square-js',
                'fa-vuejs',
                'fa-react',
              ]"
              :key="i"
              class="p-4 bg-[#1e2229] rounded-2xl cursor-pointer shadow-[6px_6px_12px_#14171c,-6px_-6px_12px_#282d36] hover:shadow-[inset_4px_4px_8px_#14171c,inset_-4px_-4px_8px_#282d36] text-gray-500 hover:text-teal-400 transition-all duration-300 transform hover:scale-95"
            >
              <i :class="['fa-brands', i, 'text-3xl']"></i>
            </div>
            <div
              class="p-4 bg-[#1e2229] rounded-2xl cursor-pointer shadow-[6px_6px_12px_#14171c,-6px_-6px_12px_#282d36] hover:shadow-[inset_4px_4px_8px_#14171c,inset_-4px_-4px_8px_#282d36] transition-all duration-300 transform hover:scale-95 flex items-center justify-center"
            >
              <img
                class="h-8 w-auto opacity-70 hover:opacity-100 transition"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Tailwind"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Correct relative import for Vite to resolve the asset
import avt from "../assets/avt.jpg";
</script>
