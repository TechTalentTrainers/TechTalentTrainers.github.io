<template>
  <!-- Header -->
  <header
    class="relative sticky top-0 z-50 transition-all duration-300 border-b bg-white/80 backdrop-blur-lg border-gray-200/50"
    :class="{ 'shadow-xl bg-white/90': scrolled }"
  >
    <div class="container px-6 py-4 mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3 group">
          <div class="relative">
            <div
              class="w-10 h-10 transition-transform duration-300 transform shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl rotate-12 group-hover:rotate-0"
            ></div>
            <div
              class="absolute inset-0 w-10 h-10 transition-opacity duration-300 opacity-50 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl blur group-hover:opacity-75"
            ></div>
            <div class="absolute inset-[15px] flex items-center justify-center">
              <div class="scale-[0.20]" v-html="TTTLogo"></div>
            </div>
          </div>
          <div>
            <span
              class="text-xl font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text"
              >Tech Talent Trainers</span
            >
            <div class="text-xs font-medium text-gray-500">
              Empowering Futures
            </div>
          </div>
        </div>

        <nav class="items-center hidden space-x-8 lg:flex">
          <a
            href="#"
            class="relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 group"
          >
            Home
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#mission"
            class="relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 group"
          >
            Our Mission
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#contact"
            class="relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 group mr-[20px]"
          >
            Work with Us
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"
            ></span>
          </a>
          <div class="border-l-2  border-blue-500 pl-4 w-0 h-[2rem] mx-0">
            
          </div>
          <a
            href="#contact"
            class="relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 group"
          >
            Blog
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"
            ></span>
          </a>
          <button
            class="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-xl"
          >
            <span class="flex items-center space-x-2">
              <UserPlusIcon class="w-4 h-4" />
              <span>Register for Cohort</span>
            </span>
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="p-2 transition-colors duration-200 rounded-lg lg:hidden hover:bg-gray-100"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <MenuIcon class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="pb-4 mt-4 border-t border-gray-200 lg:hidden"
        >
          <div class="flex flex-col pt-4 space-y-4">
            <a
              href="#"
              class="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >Home</a
            >
            <a
              href="#mission"
              class="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >Our Mission</a
            >
            <a
              href="#contact"
              class="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >Work with Us</a
            >
            <button
              class="w-full px-6 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Register for Cohort
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import TTTLogo from "../assets/images/TechTalentTrainersLogo.svg?raw";
import { UserPlusIcon, MenuIcon } from "lucide-vue-next";
</script>
