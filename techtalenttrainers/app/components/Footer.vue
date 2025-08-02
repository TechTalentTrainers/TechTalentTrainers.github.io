<template>
  <!-- Enhanced Footer -->
  <footer
    class="relative z-10 py-16 text-white bg-gradient-to-br from-gray-900 to-black"
  >
    <div class="container px-6 mx-auto">
      <div class="grid gap-12 mb-12 lg:grid-cols-4">
        <div class="space-y-6 lg:col-span-2">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <div
                class="w-12 h-12 transform bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl rotate-12"
              ></div>
              <div
                class="absolute inset-[15px] flex items-center justify-center"
              >
                <div class="scale-[0.20]" v-html="TTTLogo"></div>
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold">TECH TALENT TRAINERS</div>
              <div class="text-sm text-gray-400">
                Empowering Futures Through Technology
              </div>
            </div>
          </div>
          <p class="max-w-md leading-relaxed text-gray-300">
            Breaking down barriers to tech careers and creating opportunities
            for underserved communities worldwide.
          </p>
          <div class="flex space-x-4">
            <div
              class="flex items-center justify-center w-10 h-10 transition-colors duration-200 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
            >
              <span class="text-sm font-bold"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin-icon lucide-linkedin"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
            </div>
            <div
              class="flex items-center justify-center w-10 h-10 transition-colors duration-200 bg-blue-400 rounded-lg cursor-pointer hover:bg-blue-500"
            >
              <span class="text-sm font-bold"
                ><svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path
                    fill="currentColor"
                    d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-bold font-bricolage-grotesque">
            Quick Links
          </h4>
          <div class="space-y-2">
            <a
              href="#"
              class="block text-gray-300 transition-colors duration-200 hover:text-white"
              >About Us</a
            >
            <a
              href="#"
              class="block text-gray-300 transition-colors duration-200 hover:text-white"
              >Programs</a
            >
            <a
              href="#"
              class="block text-gray-300 transition-colors duration-200 hover:text-white"
              >Success Stories</a
            >
            <a
              href="#"
              class="block text-gray-300 transition-colors duration-200 hover:text-white"
              >Blog</a
            >
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-bold font-bricolage-grotesque">
            Contact Info
          </h4>
          <div class="space-y-2 text-gray-300">
            <p>tech.talenttraininers@gmail.com</p>
            <p>+447 547 797 067</p>
            <p>+234 906 348 1249</p>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between pt-8 space-y-4 border-t border-gray-800 md:flex-row md:space-y-0"
      >
        <p class="text-sm text-gray-400">
          © 2025 Tech Talent Trainers. All rights reserved.
        </p>
        <div class="flex space-x-6 text-sm text-gray-400">
          <a href="#" class="transition-colors duration-200 hover:text-white"
            >Privacy Policy</a
          >
          <a href="#" class="transition-colors duration-200 hover:text-white"
            >Terms of Service</a
          >
          <a href="#" class="transition-colors duration-200 hover:text-white"
            >Cookie Policy</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import TTTLogo from "../assets/images/TechTalentTrainersLogo.svg?raw";
</script>
