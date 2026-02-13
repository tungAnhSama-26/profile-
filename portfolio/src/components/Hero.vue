<template>
  <section id="about" class="bg-[#0b0f14] py-16 md:py-24 pb-12 flex items-center justify-center text-white">
    <div class="w-full max-w-5xl px-4 sm:px-6 lg:px-8">  <!-- Added responsive padding -->
      <h1 class="text-3xl sm:text-4xl font-bold mb-8 flex items-center justify-center">
        <span class="font-bold text-zinc-100">About me.</span>
      </h1>

      <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <!-- Avatar -->
        <div class="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">  <!-- Responsive sizes -->
          <div class="w-full h-full border-[3px] border-teal-400 rounded-md"></div>
          <span class="absolute -bottom-5 -right-5 text-4xl sm:text-5xl font-bold">
            &lt;/&gt;
          </span>
        </div>

        <!-- Content -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl font-bold">
            <span class="text-inherit">Tung Anh Tran Vu</span>.
          </h1>

          <h2 class="text-3xl sm:text-4xl font-semibold mt-2">Frontend Developer</h2>  <!-- Assuming title; adjust -->

          <div class="flex flex-wrap justify-center md:justify-start gap-4 text-xl sm:text-2xl text-teal-400 mt-6">
            <i class="fa-brands fa-html5 hover:text-white transition"></i>
            <i class="fa-brands fa-css3-alt hover:text-white transition"></i>
            <i class="fa-brands fa-square-js hover:text-white transition"></i>
            <i class="fa-brands fa-vuejs hover:text-white transition"></i>
            <i class="fa-brands fa-react hover:text-white transition"></i>
            <i class="fa-brands fa-bootstrap hover:text-white transition"></i>

            <img class="h-6 sm:h-8 w-auto opacity-70 hover:opacity-100 hover:scale-110 transition"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Tailwind" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>