<template>
  <div class="min-h-screen overflow-x-hidden bg-white">
    <!-- Animated Background -->
    <div class="fixed inset-0 z-0">
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      ></div>
      <div
        class="absolute top-0 left-0 bg-blue-200 rounded-full w-96 h-96 mix-blend-multiply filter blur-xl opacity-30 animate-blob"
      ></div>
      <div
        class="absolute top-0 right-0 bg-purple-200 rounded-full w-96 h-96 mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-0 bg-indigo-200 rounded-full left-1/2 w-96 h-96 mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
      ></div>
    </div>

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
              class="relative font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 group"
            >
              Work with Us
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

    <!-- Hero Section -->
    <section class="relative z-10 pt-20 pb-32">
      <div class="container px-6 mx-auto">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <div class="space-y-8" v-motion-fade-visible>
            <div class="space-y-6">
              <div
                class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
              >
                <SparklesIcon class="w-4 h-4" />
                <span>Transforming Lives Through Tech</span>
              </div>

              <h1
                class="text-6xl font-bold leading-tight lg:text-7xl font-bricolage-grotesque main-heading"
              >
                <span
                  class="text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text"
                  >Breaking down</span
                >
                <br />
                <span
                  class="text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text"
                  >barriers</span
                >
                <br />
                <span
                  class="text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text"
                  >to tech careers</span
                >
              </h1>

              <p class="max-w-lg text-xl leading-relaxed text-gray-600">
                We connect individuals with learning and career opportunities
                that are growth-friendly and tailored for their social context.
              </p>
            </div>

            <div class="flex flex-col gap-4 sm:flex-row">
              <button
                class="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-xl"
              >
                <RocketIcon class="w-5 h-5" />
                <span>Start Your Journey</span>
              </button>
              <button
                class="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-gray-700 transition-all duration-300 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 hover:scale-105"
              >
                <PlayIcon class="w-5 h-5" />
                <span>See our Vision</span>
              </button>
            </div>

            <!-- Enhanced Statistics -->
            <div
              class="grid grid-cols-3 gap-8 pt-8"
              v-motion-slide-visible-bottom
            >
              <div
                v-for="(stat, index) in stats"
                :key="index"
                class="text-center group"
              >
                <div class="relative">
                  <div
                    class="mb-2 text-3xl lg:text-4xl font-bold text-transparent transition-transform duration-300 lg:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text group-hover:scale-110"
                  >
                    <span ref="statNumbers">{{ animatedStats[index] }}</span
                    >{{ stat.suffix }}
                  </div>
                  <div
                    class="text-sm font-medium tracking-wide text-gray-600 uppercase"
                  >
                    {{ stat.label }}
                  </div>
                  <div
                    class="absolute transition-opacity duration-300 opacity-0 -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl group-hover:opacity-100 -z-10"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced Hero Visual -->
          <div class="relative mt-[8rem] lg:mt-0" v-motion-fade-visible>
            <div class="absolute inset-0 -top-[200px] z-0">
              <svg
                class="animated"
                id="freepik_stories-code-snippets"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
              >
                <g
                  id="freepik--background-complete--inject-218"
                  class="animable animator-active"
                  style="transform-origin: 250px 226.165px"
                >
                  <rect
                    y="382.4"
                    width="500"
                    height="0.25"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 250px 382.525px;
                    "
                    id="el55d1yu0jwrj"
                    class="animable"
                  ></rect>
                  <rect
                    x="52.46"
                    y="391.92"
                    width="33.12"
                    height="0.25"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 69.02px 392.045px;
                    "
                    id="elgofqegoaxw8"
                    class="animable"
                  ></rect>
                  <rect
                    x="171.14"
                    y="392.05"
                    width="53.86"
                    height="0.25"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 198.07px 392.175px;
                    "
                    id="elfyr9jf54tvt"
                    class="animable"
                  ></rect>
                  <rect
                    x="105.77"
                    y="397.08"
                    width="19.19"
                    height="0.25"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 115.365px 397.205px;
                    "
                    id="elurmi0q8znh"
                    class="animable"
                  ></rect>
                  <rect
                    x="426.77"
                    y="396.96"
                    width="19.23"
                    height="0.25"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 436.385px 397.085px;
                    "
                    id="eljfua7cat03"
                    class="animable"
                  ></rect>
                  <rect
                    x="387.57"
                    y="396.96"
                    width="30.29"
                    height="0.25"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 402.715px 397.085px;
                    "
                    id="el0g64whbk47er"
                    class="animable"
                  ></rect>
                  <rect
                    x="328.33"
                    y="395.31"
                    width="42.56"
                    height="0.25"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 349.61px 395.435px;
                    "
                    id="el7o6gnd647ou"
                    class="animable"
                  ></rect>
                  <path
                    d="M237,337.8H43.91a5.71,5.71,0,0,1-5.7-5.71V60.66A5.71,5.71,0,0,1,43.91,55H237a5.71,5.71,0,0,1,5.71,5.71V332.09A5.71,5.71,0,0,1,237,337.8ZM43.91,55.2a5.46,5.46,0,0,0-5.45,5.46V332.09a5.46,5.46,0,0,0,5.45,5.46H237a5.47,5.47,0,0,0,5.46-5.46V60.66A5.47,5.47,0,0,0,237,55.2Z"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 140.46px 196.4px;
                    "
                    id="els5nnaen93r"
                    class="animable"
                  ></path>
                  <path
                    d="M453.31,337.8H260.21a5.72,5.72,0,0,1-5.71-5.71V60.66A5.72,5.72,0,0,1,260.21,55h193.1A5.71,5.71,0,0,1,459,60.66V332.09A5.71,5.71,0,0,1,453.31,337.8ZM260.21,55.2a5.47,5.47,0,0,0-5.46,5.46V332.09a5.47,5.47,0,0,0,5.46,5.46h193.1a5.47,5.47,0,0,0,5.46-5.46V60.66a5.47,5.47,0,0,0-5.46-5.46Z"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 356.75px 196.4px;
                    "
                    id="elqitjc8ik1fj"
                    class="animable"
                  ></path>
                  <path
                    d="M308.94,247.46H86.74a10.18,10.18,0,0,1-10.28-11.28L88.57,99.29A12.61,12.61,0,0,1,100.84,88H323.05a10.19,10.19,0,0,1,10.28,11.28L321.22,236.18A12.61,12.61,0,0,1,308.94,247.46Z"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 204.894px 167.73px;
                    "
                    id="elfhmjio9r5f"
                    class="animable"
                  ></path>
                  <path
                    d="M292.7,229.64H70.49a10.19,10.19,0,0,1-10.28-11.28L72.32,81.47A12.62,12.62,0,0,1,84.6,70.19H306.8a10.18,10.18,0,0,1,10.28,11.28L305,218.36A12.6,12.6,0,0,1,292.7,229.64Z"
                    style="
                      fill: rgb(245, 245, 245);
                      transform-origin: 188.646px 149.915px;
                    "
                    id="elg7bhs3l1xx4"
                    class="animable"
                  ></path>
                  <path
                    d="M306.8,70.19H84.6A12.62,12.62,0,0,0,72.32,81.47H317.08A10.18,10.18,0,0,0,306.8,70.19Z"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 194.73px 75.8294px;
                    "
                    id="el25efjx7pmnd"
                    class="animable"
                  ></path>
                  <path
                    d="M125,95.69H89.19a2.78,2.78,0,0,1-2.81-3.09h0a3.43,3.43,0,0,1,3.36-3.09h35.79a2.78,2.78,0,0,1,2.82,3.09h0A3.43,3.43,0,0,1,125,95.69Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 107.365px 92.5999px;
                    "
                    id="elu2gw0aw5m6"
                    class="animable"
                  ></path>
                  <path
                    d="M195.68,95.69H137.83A2.78,2.78,0,0,1,135,92.6h0a3.44,3.44,0,0,1,3.37-3.09h57.85A2.78,2.78,0,0,1,199,92.6h0A3.43,3.43,0,0,1,195.68,95.69Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 167px 92.6004px;
                    "
                    id="elz0kj1eppdj"
                    class="animable"
                  ></path>
                  <path
                    d="M142.92,106h-48a2.78,2.78,0,0,1-2.81-3.1h0a3.44,3.44,0,0,1,3.36-3.09h48a2.79,2.79,0,0,1,2.82,3.09h0A3.45,3.45,0,0,1,142.92,106Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 119.199px 102.905px;
                    "
                    id="elj8f0gc4klli"
                    class="animable"
                  ></path>
                  <path
                    d="M232.2,106H155.77a2.79,2.79,0,0,1-2.82-3.1h0a3.45,3.45,0,0,1,3.36-3.09h76.44a2.79,2.79,0,0,1,2.82,3.09h0A3.45,3.45,0,0,1,232.2,106Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 194.259px 102.905px;
                    "
                    id="el9e4wi434rd"
                    class="animable"
                  ></path>
                  <path
                    d="M193.86,116.28H136a2.79,2.79,0,0,1-2.82-3.09h0a3.45,3.45,0,0,1,3.37-3.1h57.85a2.79,2.79,0,0,1,2.81,3.1h0A3.44,3.44,0,0,1,193.86,116.28Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 165.196px 113.185px;
                    "
                    id="elhfjp1j0wqm"
                    class="animable"
                  ></path>
                  <path
                    d="M152.65,146.57h-48a2.79,2.79,0,0,1-2.82-3.09h0a3.45,3.45,0,0,1,3.37-3.09h48a2.78,2.78,0,0,1,2.82,3.09h0A3.45,3.45,0,0,1,152.65,146.57Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 128.926px 143.48px;
                    "
                    id="elr7goawuv0wa"
                    class="animable"
                  ></path>
                  <path
                    d="M241.93,146.57H165.49a2.79,2.79,0,0,1-2.81-3.09h0a3.43,3.43,0,0,1,3.36-3.09h76.44a2.78,2.78,0,0,1,2.82,3.09h0A3.45,3.45,0,0,1,241.93,146.57Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 203.991px 143.48px;
                    "
                    id="el6b983rd11i4"
                    class="animable"
                  ></path>
                  <path
                    d="M142.26,201.55H106.47a3.45,3.45,0,0,0-3.37,3.09h0a2.79,2.79,0,0,0,2.82,3.1h35.79a3.45,3.45,0,0,0,3.37-3.1h0A2.79,2.79,0,0,0,142.26,201.55Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 124.089px 204.645px;
                    "
                    id="el1u6kx01po2m"
                    class="animable"
                  ></path>
                  <path
                    d="M213,201.55H155.11a3.45,3.45,0,0,0-3.37,3.09h0a2.79,2.79,0,0,0,2.82,3.1h57.85a3.45,3.45,0,0,0,3.36-3.1h0A2.79,2.79,0,0,0,213,201.55Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 183.754px 204.645px;
                    "
                    id="elz3k4y6sbs8h"
                    class="animable"
                  ></path>
                  <path
                    d="M162,191.26H114a3.45,3.45,0,0,0-3.37,3.09h0a2.78,2.78,0,0,0,2.82,3.09h48a3.45,3.45,0,0,0,3.37-3.09h0A2.79,2.79,0,0,0,162,191.26Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 137.724px 194.35px;
                    "
                    id="eltvbw2e930dj"
                    class="animable"
                  ></path>
                  <path
                    d="M251.3,191.26H174.86a3.44,3.44,0,0,0-3.36,3.09h0a2.78,2.78,0,0,0,2.81,3.09h76.44a3.45,3.45,0,0,0,3.37-3.09h0A2.79,2.79,0,0,0,251.3,191.26Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 212.809px 194.35px;
                    "
                    id="el1g244ka8zcl"
                    class="animable"
                  ></path>
                  <path
                    d="M126.78,150.68H104.31a3.45,3.45,0,0,0-3.37,3.09h0a2.79,2.79,0,0,0,2.82,3.09h22.48a3.44,3.44,0,0,0,3.36-3.09h0A2.78,2.78,0,0,0,126.78,150.68Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 115.271px 153.77px;
                    "
                    id="elbi3e0792o8q"
                    class="animable"
                  ></path>
                  <path
                    d="M216.06,150.68H139.63a3.44,3.44,0,0,0-3.37,3.09h0a2.78,2.78,0,0,0,2.82,3.09h76.44a3.44,3.44,0,0,0,3.36-3.09h0A2.78,2.78,0,0,0,216.06,150.68Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 177.57px 153.77px;
                    "
                    id="elzlq6v8kraw"
                    class="animable"
                  ></path>
                  <path
                    d="M298.06,75.83a3.85,3.85,0,0,1-3.75,3.45,3.12,3.12,0,0,1-3.15-3.45,3.84,3.84,0,0,1,3.76-3.44A3.11,3.11,0,0,1,298.06,75.83Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 294.61px 75.835px;
                    "
                    id="elymrb3crv1dq"
                    class="animable"
                  ></path>
                  <path
                    d="M284.74,75.83A3.85,3.85,0,0,1,281,79.28a3.12,3.12,0,0,1-3.15-3.45,3.84,3.84,0,0,1,3.76-3.44A3.11,3.11,0,0,1,284.74,75.83Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 281.295px 75.8351px;
                    "
                    id="elvybku7qf3"
                    class="animable"
                  ></path>
                  <path
                    d="M271.42,75.83a3.85,3.85,0,0,1-3.75,3.45,3.1,3.1,0,0,1-3.14-3.45,3.83,3.83,0,0,1,3.75-3.44A3.1,3.1,0,0,1,271.42,75.83Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 267.974px 75.835px;
                    "
                    id="elkrdactdf3d"
                    class="animable"
                  ></path>
                  <path
                    d="M338.09,364.33H186.33a7,7,0,0,1-7-7.71l8.28-93.49a8.61,8.61,0,0,1,8.38-7.71H347.72a7,7,0,0,1,7,7.71l-8.27,93.49A8.61,8.61,0,0,1,338.09,364.33Z"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 267.025px 309.875px;
                    "
                    id="el3u18gazpo6a"
                    class="animable"
                  ></path>
                  <path
                    d="M347.72,255.42H196a8.61,8.61,0,0,0-8.38,7.71H354.74A7,7,0,0,0,347.72,255.42Z"
                    style="
                      fill: rgb(250, 250, 250);
                      transform-origin: 271.198px 259.275px;
                    "
                    id="ele9loqds434"
                    class="animable"
                  ></path>
                  <path
                    d="M217.15,345.14H192.7a2.37,2.37,0,0,0-2.3,2.11h0a1.9,1.9,0,0,0,1.93,2.11h24.44a2.35,2.35,0,0,0,2.3-2.11h0A1.9,1.9,0,0,0,217.15,345.14Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 204.735px 347.25px;
                    "
                    id="el18hsj4rgr0y"
                    class="animable"
                  ></path>
                  <path
                    d="M265.43,345.14H225.92a2.35,2.35,0,0,0-2.3,2.11h0a1.9,1.9,0,0,0,1.93,2.11h39.51a2.34,2.34,0,0,0,2.29-2.11h0A1.89,1.89,0,0,0,265.43,345.14Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 245.486px 347.25px;
                    "
                    id="el942kdx2wun"
                    class="animable"
                  ></path>
                  <path
                    d="M230.64,338.11H197.87a2.37,2.37,0,0,0-2.3,2.11h0a1.9,1.9,0,0,0,1.93,2.11h32.77a2.34,2.34,0,0,0,2.29-2.11h0A1.89,1.89,0,0,0,230.64,338.11Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 214.066px 340.22px;
                    "
                    id="el2cec8iskgtp"
                    class="animable"
                  ></path>
                  <path
                    d="M291.62,338.11H239.41a2.37,2.37,0,0,0-2.3,2.11h0a1.9,1.9,0,0,0,1.93,2.11h52.2a2.35,2.35,0,0,0,2.3-2.11h0A1.91,1.91,0,0,0,291.62,338.11Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 265.324px 340.22px;
                    "
                    id="elyfo6zqc6ky"
                    class="animable"
                  ></path>
                  <path
                    d="M266.67,331.08H227.16a2.37,2.37,0,0,0-2.3,2.11h0a1.91,1.91,0,0,0,1.93,2.12H266.3a2.36,2.36,0,0,0,2.3-2.12h0A1.91,1.91,0,0,0,266.67,331.08Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 246.729px 333.195px;
                    "
                    id="elxpmdztarzwa"
                    class="animable"
                  ></path>
                  <path
                    d="M242.19,310.39H209.42a2.36,2.36,0,0,0-2.3,2.12h0a1.91,1.91,0,0,0,1.93,2.11h32.77a2.35,2.35,0,0,0,2.29-2.11h0A1.9,1.9,0,0,0,242.19,310.39Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 225.616px 312.505px;
                    "
                    id="elp8jiz1qb8w"
                    class="animable"
                  ></path>
                  <path
                    d="M303.17,310.39H251a2.37,2.37,0,0,0-2.3,2.12h0a1.91,1.91,0,0,0,1.93,2.11h52.2a2.35,2.35,0,0,0,2.3-2.11h0A1.91,1.91,0,0,0,303.17,310.39Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 276.916px 312.505px;
                    "
                    id="el0dl8qlejv7t"
                    class="animable"
                  ></path>
                  <path
                    d="M241.74,272.84H217.29a1.89,1.89,0,0,1-1.92-2.11h0a2.35,2.35,0,0,1,2.3-2.11h24.44a1.9,1.9,0,0,1,1.93,2.11h0A2.36,2.36,0,0,1,241.74,272.84Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 229.704px 270.73px;
                    "
                    id="elongg1lyyzdb"
                    class="animable"
                  ></path>
                  <path
                    d="M290,272.84H250.51a1.9,1.9,0,0,1-1.93-2.11h0a2.36,2.36,0,0,1,2.3-2.11h39.51a1.9,1.9,0,0,1,1.93,2.11h0A2.35,2.35,0,0,1,290,272.84Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 270.45px 270.73px;
                    "
                    id="elz3l6ot6h5l"
                    class="animable"
                  ></path>
                  <path
                    d="M254,279.87H221.22a1.91,1.91,0,0,1-1.93-2.11h0a2.36,2.36,0,0,1,2.3-2.11h32.77a1.9,1.9,0,0,1,1.93,2.11h0A2.37,2.37,0,0,1,254,279.87Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 237.791px 277.76px;
                    "
                    id="el7733zrqzsqd"
                    class="animable"
                  ></path>
                  <path
                    d="M315,279.87h-52.2a1.91,1.91,0,0,1-1.93-2.11h0a2.36,2.36,0,0,1,2.3-2.11h52.21a1.9,1.9,0,0,1,1.92,2.11h0A2.35,2.35,0,0,1,315,279.87Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 289.086px 277.76px;
                    "
                    id="elcgaksq9wfwl"
                    class="animable"
                  ></path>
                  <path
                    d="M225,307.59H209.67a1.91,1.91,0,0,1-1.93-2.11h0a2.37,2.37,0,0,1,2.3-2.12h15.35a1.91,1.91,0,0,1,1.93,2.12h0A2.37,2.37,0,0,1,225,307.59Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 217.531px 305.475px;
                    "
                    id="elpf8sev46x3j"
                    class="animable"
                  ></path>
                  <path
                    d="M286,307.59h-52.2a1.89,1.89,0,0,1-1.92-2.11h0a2.35,2.35,0,0,1,2.29-2.12h52.21a1.9,1.9,0,0,1,1.92,2.12h0A2.35,2.35,0,0,1,286,307.59Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 260.09px 305.475px;
                    "
                    id="el94csp8z3ye"
                    class="animable"
                  ></path>
                  <path
                    d="M341.75,259.27a2.64,2.64,0,0,1-2.57,2.36,2.12,2.12,0,0,1-2.14-2.36,2.61,2.61,0,0,1,2.56-2.35A2.12,2.12,0,0,1,341.75,259.27Z"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 339.394px 259.275px;
                    "
                    id="ely9r3tfpi2x"
                    class="animable"
                  ></path>
                  <path
                    d="M332.65,259.27a2.63,2.63,0,0,1-2.56,2.36,2.13,2.13,0,0,1-2.15-2.36,2.62,2.62,0,0,1,2.56-2.35A2.12,2.12,0,0,1,332.65,259.27Z"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 330.295px 259.275px;
                    "
                    id="elbn8t74zztz7"
                    class="animable"
                  ></path>
                  <path
                    d="M323.55,259.27a2.62,2.62,0,0,1-2.56,2.36,2.12,2.12,0,0,1-2.14-2.36,2.61,2.61,0,0,1,2.56-2.35A2.11,2.11,0,0,1,323.55,259.27Z"
                    style="
                      fill: rgb(235, 235, 235);
                      transform-origin: 321.2px 259.275px;
                    "
                    id="eljnq7xu692q"
                    class="animable"
                  ></path>
                </g>
                <g
                  id="freepik--Shadow--inject-218"
                  class="animable"
                  style="transform-origin: 250px 416.24px"
                >
                  <ellipse
                    id="freepik--path--inject-218"
                    cx="250"
                    cy="416.24"
                    rx="193.89"
                    ry="11.32"
                    style="
                      fill: rgb(245, 245, 245);
                      transform-origin: 250px 416.24px;
                    "
                    class="animable"
                  ></ellipse>
                </g>
                <g
                  id="freepik--Window--inject-218"
                  class="animable"
                  style="transform-origin: 313.135px 209.325px"
                >
                  <path
                    d="M420.25,188.93h0a.49.49,0,0,1-.46-.53l.43-6.77a.52.52,0,0,1,.53-.47.5.5,0,0,1,.47.54l-.44,6.77A.49.49,0,0,1,420.25,188.93Z"
                    style="fill: #90caf9; transform-origin: 420.505px 185.046px"
                    id="elfazx5fwe1sr"
                    class="animable"
                  ></path>
                  <path
                    d="M421.16,174.84h0a.5.5,0,0,1-.47-.53l1.48-23a.5.5,0,0,1,.53-.46.5.5,0,0,1,.47.53l-1.48,23A.5.5,0,0,1,421.16,174.84Z"
                    style="fill: #90caf9; transform-origin: 421.93px 162.845px"
                    id="elrb4wwo7vet9"
                    class="animable"
                  ></path>
                  <path
                    d="M393.13,326.72H217.69a13.46,13.46,0,0,1-13.55-14.48l13.23-205.82a15.72,15.72,0,0,1,15.42-14.49H408.23a13.46,13.46,0,0,1,13.55,14.49L408.55,312.24A15.72,15.72,0,0,1,393.13,326.72Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 312.96px 209.325px;
                    "
                    id="eltddt3tmpvj"
                    class="animable"
                  ></path>
                  <path
                    d="M393.13,327.72H217.69a14.46,14.46,0,0,1-14.55-15.55l13.23-205.81a16.71,16.71,0,0,1,16.42-15.43H408.23a14.46,14.46,0,0,1,14.55,15.55L409.55,312.3A16.71,16.71,0,0,1,393.13,327.72ZM232.79,92.93a14.68,14.68,0,0,0-14.42,13.55L205.14,312.3a12.46,12.46,0,0,0,12.55,13.42H393.13a14.68,14.68,0,0,0,14.42-13.55l13.23-205.81a12.46,12.46,0,0,0-12.55-13.43Z"
                    style="fill: #90caf9; transform-origin: 312.96px 209.325px"
                    id="eltslkedoyzea"
                    class="animable"
                  ></path>
                  <path
                    d="M408.23,91.93H232.79a15.72,15.72,0,0,0-15.42,14.49H421.78A13.46,13.46,0,0,0,408.23,91.93Z"
                    style="fill: #90caf9; transform-origin: 319.595px 99.1747px"
                    id="el8pbuunmn8fv"
                    class="animable"
                  ></path>
                  <path
                    d="M268.08,130.77h-26.9a2.06,2.06,0,0,1-2.08-2.21h0a2.41,2.41,0,0,1,2.36-2.22h26.91a2.06,2.06,0,0,1,2.07,2.22h0A2.4,2.4,0,0,1,268.08,130.77Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 254.77px 128.555px;
                    "
                    id="elu1uufdtht99"
                    class="animable"
                  ></path>
                  <path
                    d="M338.26,144.08H253.63a2.06,2.06,0,0,1-2.08-2.22h0a2.41,2.41,0,0,1,2.36-2.22h84.64a2.06,2.06,0,0,1,2.07,2.22h0A2.4,2.4,0,0,1,338.26,144.08Z"
                    style="fill: #90caf9; transform-origin: 296.085px 141.86px"
                    id="eluakws5zgymi"
                    class="animable"
                  ></path>
                  <path
                    d="M297.05,157.38H252.77a2,2,0,0,1-2.07-2.21h0a2.41,2.41,0,0,1,2.36-2.22h44.28a2.06,2.06,0,0,1,2.07,2.22h0A2.4,2.4,0,0,1,297.05,157.38Z"
                    style="fill: #90caf9; transform-origin: 275.052px 155.166px"
                    id="ell68ip5ocq3"
                    class="animable"
                  ></path>
                  <path
                    d="M376.62,170.69H251.92a2.06,2.06,0,0,1-2.08-2.22h0a2.41,2.41,0,0,1,2.36-2.22H376.9a2.06,2.06,0,0,1,2.08,2.22h0A2.41,2.41,0,0,1,376.62,170.69Z"
                    style="fill: #90caf9; transform-origin: 314.41px 168.47px"
                    id="elhevsktjrwvj"
                    class="animable"
                  ></path>
                  <path
                    d="M358.48,157.38H314.2a2.06,2.06,0,0,1-2.08-2.21h0a2.41,2.41,0,0,1,2.36-2.22h44.28a2.07,2.07,0,0,1,2.08,2.22h0A2.4,2.4,0,0,1,358.48,157.38Z"
                    style="fill: #90caf9; transform-origin: 336.48px 155.165px"
                    id="elg4br7daxnvu"
                    class="animable"
                  ></path>
                  <path
                    d="M259.53,263.83H232.62a2.06,2.06,0,0,1-2.07-2.22h0a2.41,2.41,0,0,1,2.36-2.22h26.91a2.06,2.06,0,0,1,2.07,2.22h0A2.41,2.41,0,0,1,259.53,263.83Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 246.22px 261.61px;
                    "
                    id="elitk1bacz8d"
                    class="animable"
                  ></path>
                  <path
                    d="M328.86,290.44H244.22a2.07,2.07,0,0,1-2.08-2.22h0A2.42,2.42,0,0,1,244.5,286h84.64a2.07,2.07,0,0,1,2.08,2.22h0A2.41,2.41,0,0,1,328.86,290.44Z"
                    style="fill: #90caf9; transform-origin: 286.68px 288.22px"
                    id="eldtmpimvv8u5"
                    class="animable"
                  ></path>
                  <path
                    d="M287.64,303.74H243.36a2.06,2.06,0,0,1-2.07-2.22h0a2.41,2.41,0,0,1,2.36-2.21h44.28a2.05,2.05,0,0,1,2.07,2.21h0A2.41,2.41,0,0,1,287.64,303.74Z"
                    style="fill: #90caf9; transform-origin: 265.645px 301.525px"
                    id="eloq3sy6613h"
                    class="animable"
                  ></path>
                  <path
                    d="M370.06,272.7H245.36a2.4,2.4,0,0,0-2.36,2.21h0a2.06,2.06,0,0,0,2.07,2.22H369.78a2.41,2.41,0,0,0,2.36-2.22h0A2.06,2.06,0,0,0,370.06,272.7Z"
                    style="fill: #90caf9; transform-origin: 307.57px 274.915px"
                    id="el6z4ih29d76v"
                    class="animable"
                  ></path>
                  <path
                    d="M349.07,303.74H304.79a2.06,2.06,0,0,1-2.07-2.22h0a2.4,2.4,0,0,1,2.36-2.21h44.27a2.06,2.06,0,0,1,2.08,2.21h0A2.41,2.41,0,0,1,349.07,303.74Z"
                    style="fill: #90caf9; transform-origin: 327.075px 301.525px"
                    id="elbdi6cgxi1l8"
                    class="animable"
                  ></path>
                  <path
                    d="M277.11,197.3H236.9a2.06,2.06,0,0,1-2.07-2.22h0a2.4,2.4,0,0,1,2.36-2.22H277.4a2.06,2.06,0,0,1,2.07,2.22h0A2.41,2.41,0,0,1,277.11,197.3Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 257.15px 195.08px;
                    "
                    id="elvawb61ps7yr"
                    class="animable"
                  ></path>
                  <path
                    d="M332.56,232.78H247.93a2.4,2.4,0,0,0-2.36,2.22h0a2.06,2.06,0,0,0,2.07,2.22h84.64a2.41,2.41,0,0,0,2.36-2.22h0A2.06,2.06,0,0,0,332.56,232.78Z"
                    style="fill: #90caf9; transform-origin: 290.105px 235px"
                    id="el5ufj4hpartn"
                    class="animable"
                  ></path>
                  <path
                    d="M279.75,219.48h-31a2.4,2.4,0,0,0-2.36,2.21h0a2.06,2.06,0,0,0,2.08,2.22h31a2.41,2.41,0,0,0,2.36-2.22h0A2.06,2.06,0,0,0,279.75,219.48Z"
                    style="fill: #90caf9; transform-origin: 264.11px 221.695px"
                    id="el9hr3hnw1zcr"
                    class="animable"
                  ></path>
                  <path
                    d="M307.81,206.17H249.64a2.4,2.4,0,0,0-2.36,2.22h0a2,2,0,0,0,2.07,2.21h58.18a2.4,2.4,0,0,0,2.36-2.21h0A2.07,2.07,0,0,0,307.81,206.17Z"
                    style="fill: #90caf9; transform-origin: 278.582px 208.386px"
                    id="elgmosjixkx0d"
                    class="animable"
                  ></path>
                  <path
                    d="M382.32,206.17H324.15a2.4,2.4,0,0,0-2.36,2.22h0a2,2,0,0,0,2.07,2.21H382a2.41,2.41,0,0,0,2.36-2.21h0A2.07,2.07,0,0,0,382.32,206.17Z"
                    style="fill: #90caf9; transform-origin: 353.072px 208.386px"
                    id="el8ozj0446hxv"
                    class="animable"
                  ></path>
                  <path
                    d="M354.48,219.48H296.9a2.4,2.4,0,0,0-2.36,2.21h0a2.06,2.06,0,0,0,2.08,2.22H354.2a2.41,2.41,0,0,0,2.36-2.22h0A2.06,2.06,0,0,0,354.48,219.48Z"
                    style="fill: #90caf9; transform-origin: 325.55px 221.695px"
                    id="ely0vbc25zsg"
                    class="animable"
                  ></path>
                  <path
                    d="M236.59,98.44a4.35,4.35,0,0,1-4.28,4,3.73,3.73,0,0,1-3.77-4,4.35,4.35,0,0,1,4.29-4A3.72,3.72,0,0,1,236.59,98.44Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 232.565px 98.44px;
                    "
                    id="elo9wow3us5kl"
                    class="animable"
                  ></path>
                  <path
                    d="M244.9,95.16a3,3,0,0,1,2.22.94,3,3,0,0,1,.8,2.29,3.6,3.6,0,0,1-3.54,3.32,3,3,0,0,1-3-3.22,3.6,3.6,0,0,1,3.54-3.33m0-.75a4.35,4.35,0,0,0-4.29,4,3.73,3.73,0,0,0,3.77,4,4.35,4.35,0,0,0,4.28-4,3.72,3.72,0,0,0-3.76-4Z"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 244.655px 98.41px;
                    "
                    id="elkkhfjr1vurs"
                    class="animable"
                  ></path>
                  <g id="eld0t2y2mwn8a">
                    <path
                      d="M260.74,98.44a4.36,4.36,0,0,1-4.29,4,3.73,3.73,0,0,1-3.77-4,4.36,4.36,0,0,1,4.29-4A3.74,3.74,0,0,1,260.74,98.44Z"
                      style="
                        fill: rgb(255, 255, 255);
                        opacity: 0.5;
                        transform-origin: 256.71px 98.4401px;
                      "
                      class="animable"
                      id="eldi6di1c0j"
                    ></path>
                  </g>
                </g>
                <g
                  id="freepik--Code--inject-218"
                  class="animable"
                  style="transform-origin: 295.4px 218.85px"
                >
                  <path
                    d="M349.3,185.17l35,4.47a12.72,12.72,0,0,1,10.84,15.27L385.2,257a14.77,14.77,0,0,1-16,11.83L206.47,248a12.71,12.71,0,0,1-10.84-15.26l10-52.12a14.77,14.77,0,0,1,16-11.83l106.28,13.6"
                    style="
                      fill: rgb(255, 255, 255);
                      transform-origin: 295.385px 218.81px;
                    "
                    id="elj8qgn87smfc"
                    class="animable"
                  ></path>
                  <path
                    d="M370.46,269.46h0c-.44,0-.88,0-1.33-.11l-3.68-.47a.5.5,0,0,1-.44-.56.51.51,0,0,1,.56-.43l3.69.47c.41.05.82.09,1.23.1a.5.5,0,0,1,0,1Zm4.91-.74a.5.5,0,0,1-.16-1,14.15,14.15,0,0,0,4.23-2.29.5.5,0,0,1,.7.09.5.5,0,0,1-.08.7,15.45,15.45,0,0,1-4.53,2.45A.45.45,0,0,1,375.37,268.72Zm-14.84-.47h-.06l-5-.64a.5.5,0,0,1-.44-.56.51.51,0,0,1,.56-.43l5,.63a.51.51,0,0,1,.44.56A.51.51,0,0,1,360.53,268.25ZM350.61,267h-.06l-5-.64a.49.49,0,0,1-.43-.56.49.49,0,0,1,.55-.43l5,.64a.5.5,0,0,1-.06,1Zm-9.92-1.27h-.06l-5-.63a.5.5,0,0,1-.43-.56.5.5,0,0,1,.56-.44l4.95.64a.5.5,0,0,1-.06,1Zm-9.92-1.27h-.06l-5-.63a.5.5,0,0,1,.13-1l5,.64a.5.5,0,0,1-.07,1Zm-9.92-1.26h-.06l-5-.63a.5.5,0,0,1-.43-.56.5.5,0,0,1,.56-.44l5,.64a.5.5,0,0,1-.07,1Zm62.27-.5a.48.48,0,0,1-.28-.08.5.5,0,0,1-.14-.69,13.89,13.89,0,0,0,1.89-4.41.5.5,0,1,1,1,.23,15,15,0,0,1-2,4.73A.52.52,0,0,1,383.12,262.68Zm-72.18-.77h-.07l-5-.63a.5.5,0,0,1-.43-.56.49.49,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.06,1ZM301,260.64H301l-5-.63a.5.5,0,0,1-.43-.56.5.5,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.06,1Zm-9.92-1.27H291l-5-.64a.5.5,0,1,1,.13-1l5,.63a.5.5,0,0,1-.06,1Zm-9.92-1.27h-.07l-5-.64a.5.5,0,1,1,.13-1l5,.63a.5.5,0,0,1,.43.56A.5.5,0,0,1,281.18,258.1Zm-9.92-1.27h-.07l-5-.64a.5.5,0,1,1,.13-1l5,.63a.5.5,0,0,1,.43.56A.49.49,0,0,1,271.26,256.83Zm-9.92-1.27h-.06l-5-.64a.5.5,0,0,1-.44-.55.5.5,0,0,1,.56-.44l5,.64a.5.5,0,0,1,.44.56A.51.51,0,0,1,261.34,255.56Zm-9.92-1.27h-.06l-5-.63a.5.5,0,1,1,.12-1l5,.64a.5.5,0,0,1-.06,1ZM386,253.2h-.1a.48.48,0,0,1-.39-.58l.93-4.91a.51.51,0,0,1,.59-.4.5.5,0,0,1,.4.59l-.94,4.91A.5.5,0,0,1,386,253.2ZM241.5,253h-.06l-5-.63a.51.51,0,0,1-.44-.56.5.5,0,0,1,.56-.44l5,.64a.5.5,0,0,1,.44.56A.51.51,0,0,1,241.5,253Zm-9.92-1.27h-.06l-5-.63a.51.51,0,0,1-.44-.56.5.5,0,0,1,.56-.43l5,.63a.5.5,0,0,1,.44.56A.51.51,0,0,1,231.58,251.76Zm-9.92-1.27h-.06l-5-.63a.5.5,0,0,1-.43-.56.49.49,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.07,1Zm-9.92-1.27h-.06l-5-.63a.5.5,0,0,1-.43-.56.5.5,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.07,1ZM202,247.13a.52.52,0,0,1-.24,0,13.15,13.15,0,0,1-4-3.3.5.5,0,0,1,.78-.63,11.83,11.83,0,0,0,3.67,3,.51.51,0,0,1,.2.68A.49.49,0,0,1,202,247.13Zm185.88-3.75h-.1a.5.5,0,0,1-.4-.58l.94-4.91a.51.51,0,0,1,.59-.4.5.5,0,0,1,.4.58L388.4,243A.51.51,0,0,1,387.91,243.38Zm-192-3.81a.5.5,0,0,1-.48-.36,13.47,13.47,0,0,1-.55-3.85c0-.42,0-.86.06-1.29a.49.49,0,0,1,.54-.45.5.5,0,0,1,.45.55c0,.4-.05.8-.05,1.19a12.46,12.46,0,0,0,.51,3.56.5.5,0,0,1-.34.62Zm193.87-6h-.09a.5.5,0,0,1-.4-.58l.94-4.92a.5.5,0,0,1,1,.19l-.94,4.91A.49.49,0,0,1,389.78,233.56ZM196.31,229.7h-.09a.5.5,0,0,1-.4-.59l.94-4.91a.5.5,0,0,1,.58-.4.51.51,0,0,1,.4.59l-.94,4.91A.51.51,0,0,1,196.31,229.7Zm195.35-6h-.09a.5.5,0,0,1-.4-.59l.94-4.91a.48.48,0,0,1,.58-.39.5.5,0,0,1,.4.58l-.94,4.91A.49.49,0,0,1,391.66,223.74Zm-193.47-3.86h-.1a.5.5,0,0,1-.39-.59l.93-4.91a.51.51,0,0,1,.59-.4.51.51,0,0,1,.4.59l-.94,4.91A.51.51,0,0,1,198.19,219.88Zm195.35-6h-.1a.51.51,0,0,1-.39-.59l.94-4.91a.5.5,0,0,1,.58-.4.51.51,0,0,1,.4.59l-.94,4.91A.5.5,0,0,1,393.54,213.91Zm-193.47-3.86H200a.5.5,0,0,1-.4-.58l.94-4.91a.51.51,0,0,1,.59-.4.5.5,0,0,1,.4.59l-.94,4.91A.5.5,0,0,1,200.07,210.05Zm195.28-6h0a.49.49,0,0,1-.45-.54c0-.41.05-.82.05-1.22a12.78,12.78,0,0,0-.5-3.54.49.49,0,0,1,.34-.62.5.5,0,0,1,.62.34,13.61,13.61,0,0,1,.54,3.82c0,.43,0,.87-.06,1.31A.49.49,0,0,1,395.35,204.08Zm-193.41-3.85h-.09a.5.5,0,0,1-.4-.58l.94-4.91a.5.5,0,0,1,.59-.4.49.49,0,0,1,.39.58l-.94,4.91A.49.49,0,0,1,201.94,200.23Zm190.65-5.5a.5.5,0,0,1-.39-.18,11.86,11.86,0,0,0-3.67-3.05.5.5,0,1,1,.48-.88,13.15,13.15,0,0,1,4,3.3.5.5,0,0,1-.08.7A.45.45,0,0,1,392.59,194.73Zm-188.77-4.32h-.09a.5.5,0,0,1-.4-.59l.94-4.91a.5.5,0,0,1,1,.19l-.94,4.91A.49.49,0,0,1,203.82,190.41Zm180.2-.3H384l-5-.63a.51.51,0,0,1-.44-.56.5.5,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.06,1Zm-9.92-1.27H374l-5-.63a.51.51,0,0,1-.44-.56.52.52,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.06,1Zm-9.92-1.27h-.06l-5-.63a.49.49,0,0,1-.43-.56.5.5,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.07,1Zm-9.92-1.27h-.06l-5-.64a.49.49,0,0,1-.43-.56.5.5,0,0,1,.56-.43l5,.63a.51.51,0,0,1,.43.56A.5.5,0,0,1,354.26,186.3Zm-29.78-3.81h-.07l-5-.64a.5.5,0,0,1-.44-.56.52.52,0,0,1,.56-.43l5,.63a.5.5,0,0,1,.43.56A.49.49,0,0,1,324.48,182.49Zm-9.92-1.27h-.06l-5-.64a.5.5,0,0,1-.44-.56.51.51,0,0,1,.56-.43l5,.64a.5.5,0,0,1,.44.55A.51.51,0,0,1,314.56,181.22Zm-108.85-.63h-.11a.51.51,0,0,1-.38-.6,15,15,0,0,1,2-4.74.5.5,0,0,1,.84.55,13.76,13.76,0,0,0-1.89,4.41A.51.51,0,0,1,205.71,180.59Zm98.93-.64h-.06l-5-.64a.5.5,0,0,1-.44-.56.52.52,0,0,1,.56-.43l5,.64a.5.5,0,0,1,.44.56A.51.51,0,0,1,304.64,180Zm-9.92-1.27h-.06l-5-.64a.48.48,0,0,1-.43-.55.5.5,0,0,1,.56-.44l5,.64a.5.5,0,0,1-.07,1Zm-9.92-1.27h-.06l-5-.63a.5.5,0,0,1,.13-1l5,.64a.5.5,0,0,1-.07,1Zm-9.92-1.26h-.06l-5-.63a.5.5,0,0,1-.43-.56.5.5,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.07,1ZM265,174.88h-.06l-5-.63a.5.5,0,0,1-.43-.56.5.5,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.07,1Zm-9.91-1.27H255l-5-.63a.5.5,0,1,1,.13-1l5,.63a.5.5,0,0,1-.06,1Zm-44-1.26a.51.51,0,0,1-.39-.19.5.5,0,0,1,.08-.7,15.55,15.55,0,0,1,4.52-2.46.5.5,0,0,1,.33.95,14.61,14.61,0,0,0-4.23,2.29A.51.51,0,0,1,211,172.35Zm34.1,0h-.07l-5-.64a.5.5,0,0,1-.43-.56.51.51,0,0,1,.56-.43l5,.63a.5.5,0,0,1-.06,1Zm-9.92-1.27h-.07l-5-.64a.5.5,0,0,1-.43-.56.51.51,0,0,1,.56-.43l5,.63a.5.5,0,0,1,.43.56A.5.5,0,0,1,235.21,171.07Zm-9.92-1.27h-.07l-3.67-.47a10.53,10.53,0,0,0-1.24-.1.5.5,0,0,1-.49-.52.5.5,0,0,1,.5-.48h0a12.3,12.3,0,0,1,1.34.11l3.67.46a.5.5,0,0,1,.43.56A.49.49,0,0,1,225.29,169.8Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 295.4px 218.85px;
                    "
                    id="elv93cdzck3oe"
                    class="animable"
                  ></path>
                  <path
                    d="M264.71,197.37l-37.3-4.77a2,2,0,0,1-1.66-2.34h0a2.27,2.27,0,0,1,2.46-1.81l37.29,4.77a2,2,0,0,1,1.66,2.34h0A2.26,2.26,0,0,1,264.71,197.37Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 246.455px 192.91px;
                    "
                    id="elysnmdamxmn"
                    class="animable"
                  ></path>
                  <path
                    d="M311.91,237.39l-78.5-10a2.26,2.26,0,0,0-2.45,1.81h0a2,2,0,0,0,1.66,2.34l78.49,10a2.27,2.27,0,0,0,2.46-1.81h0A2,2,0,0,0,311.91,237.39Z"
                    style="fill: #90caf9; transform-origin: 272.265px 234.465px"
                    id="el4qyk3qdr99m"
                    class="animable"
                  ></path>
                  <path
                    d="M264.51,218.59l-28.72-3.68a2.26,2.26,0,0,0-2.45,1.81h0a2,2,0,0,0,1.66,2.34l28.72,3.67a2.25,2.25,0,0,0,2.45-1.81h0A1.93,1.93,0,0,0,264.51,218.59Z"
                    style="fill: #90caf9; transform-origin: 249.761px 218.82px"
                    id="el1nwcbta34fe"
                    class="animable"
                  ></path>
                  <path
                    d="M292.12,209.37l-54-6.9a2.26,2.26,0,0,0-2.45,1.81h0a2,2,0,0,0,1.66,2.34l53.95,6.9a2.26,2.26,0,0,0,2.45-1.81h0A2,2,0,0,0,292.12,209.37Z"
                    style="fill: #90caf9; transform-origin: 264.701px 207.995px"
                    id="elj717mp6f0ig"
                    class="animable"
                  ></path>
                  <path
                    d="M361.22,218.21l-54-6.9a2.26,2.26,0,0,0-2.45,1.81h0a2,2,0,0,0,1.66,2.34l53.95,6.9a2.26,2.26,0,0,0,2.45-1.81h0A2,2,0,0,0,361.22,218.21Z"
                    style="fill: #90caf9; transform-origin: 333.801px 216.835px"
                    id="el2cco0jm0mc"
                    class="animable"
                  ></path>
                  <path
                    d="M333.82,227.45l-53.4-6.83a2.26,2.26,0,0,0-2.45,1.81h0a2,2,0,0,0,1.66,2.34L333,231.6a2.26,2.26,0,0,0,2.45-1.81h0A2,2,0,0,0,333.82,227.45Z"
                    style="fill: #90caf9; transform-origin: 306.71px 226.11px"
                    id="elrssacln90qk"
                    class="animable"
                  ></path>
                  <path
                    d="M337,183.64l8.86-2.79s-4.35-1.38-6.72-.28a12.74,12.74,0,0,0-3.22,2.49l-4.18-2.22a1.2,1.2,0,0,0,.95-.55,1,1,0,0,0,.09-.79,2.12,2.12,0,0,0-1.11-1.26,1.76,1.76,0,0,0-2.35.26,1,1,0,0,0-.09.78,2.17,2.17,0,0,0,1.11,1.27l3.88,2.06a4,4,0,0,1,1.14.89,4.76,4.76,0,0,1-1.37.69l-4.39,1.38c-1.05.33-1.76,1.15-1.59,1.84s1.17,1,2.23.63,1.76-1.15,1.59-1.83a1.05,1.05,0,0,0-.78-.7l4.73-1.49a10.38,10.38,0,0,0,2.42,3c2,1.47,6.64.83,6.64.83Zm-7.29-4.51a.59.59,0,0,1,0-.41c.2-.34,1-.43,1.68,0a1.69,1.69,0,0,1,.88,1,.51.51,0,0,1,0,.4.72.72,0,0,1-.57.29,2,2,0,0,1-1.11-.24A1.72,1.72,0,0,1,329.67,179.13Zm1.63,7.23c.1.36-.41.95-1.22,1.21s-1.53.05-1.63-.32.42-.95,1.23-1.21S331.21,186,331.3,186.36Z"
                    style="fill: #90caf9; transform-origin: 336.922px 183.052px"
                    id="elznnfkwj13fl"
                    class="animable"
                  ></path>
                </g>
                <g
                  id="freepik--Character--inject-218"
                  class="animable"
                  style="transform-origin: 152.558px 258.12px"
                >
                  <path
                    d="M159.45,216.22s-17.15,59.59-24.11,88.85c-7.3,30.73-29,77.18-30.85,97.55-1.88.75-8-.09-11.21-1.66,0,0,3-64.95,20.64-94.53-4-72.79,15.77-90.21,15.77-90.21Z"
                    style="fill: #90caf9; transform-origin: 126.365px 309.559px"
                    id="elnn4z8u7k7t9"
                    class="animable"
                  ></path>
                  <g id="el6ytdwiyngse">
                    <path
                      d="M137.24,246.15,146.88,261c-3.06,11.17-6.18,22.82-8.74,32.84C135.46,276.46,137.24,246.15,137.24,246.15Z"
                      style="opacity: 0.1; transform-origin: 141.77px 269.995px"
                      class="animable"
                      id="eliqy9bkb7kel"
                    ></path>
                  </g>
                  <path
                    d="M160,201.69l-2.64-1.44a3.51,3.51,0,0,0-3.2-.06l-4.75,2.32a6.52,6.52,0,0,0-3.57,4.8l-.21,1.3c4.22,2.67,10.76,2.45,10.76,2.45l1.87.14a2.9,2.9,0,0,0,3.2-2.62l.33-3.7A3.32,3.32,0,0,0,160,201.69Z"
                    style="
                      fill: rgb(255, 139, 123);
                      transform-origin: 153.714px 205.525px;
                    "
                    id="elfb0l103ddme"
                    class="animable"
                  ></path>
                  <path
                    d="M149.35,203.28l-.17-.05c-1.61-.51-3.37-1-5-1.68a43.66,43.66,0,0,1-4.7-2,19.7,19.7,0,0,1-3.83-2.41,5.93,5.93,0,0,1-1.37-1.62c-.19-2.1-.33-4.2-.31-6.34s.11-4.56.32-6.85.48-4.58.84-6.86c.18-1.14.37-2.27.59-3.4l.35-1.67.33-1.55.07-.28A5.42,5.42,0,0,0,126,166c-.21.78-.36,1.37-.52,2s-.28,1.29-.41,1.93c-.26,1.29-.48,2.58-.68,3.87a75.61,75.61,0,0,0-.76,7.81,67.22,67.22,0,0,0,.06,7.9,61.57,61.57,0,0,0,1,7.94l0,.28a4,4,0,0,0,.22.72,12.37,12.37,0,0,0,2.53,3.74,17.18,17.18,0,0,0,3,2.4,24.79,24.79,0,0,0,6.14,2.58,39.47,39.47,0,0,0,6,1.15c1,.11,2,.17,3,.21s1.95.06,3,0a2.71,2.71,0,0,0,.7-5.29Z"
                    style="
                      fill: rgb(255, 139, 123);
                      transform-origin: 137.356px 185.491px;
                    "
                    id="el3o834rb1lz7"
                    class="animable"
                  ></path>
                  <path
                    d="M133.07,153c4.87,4.52,7.73,11.55,4.79,25.47-4.77,2.71-16.84.23-16.84.23S119.68,158.07,133.07,153Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 130.016px 166.369px;
                    "
                    id="elhryk1yel7cq"
                    class="animable"
                  ></path>
                  <path
                    d="M145.31,132.26c.86,6,1.48,17-2.79,20.42,0,0,5.63-.15,16.49,8.56,4-4.46,1.67-6.33,1.67-6.33-6.44-2.37-6-7.23-4.68-11.67Z"
                    style="
                      fill: rgb(255, 139, 123);
                      transform-origin: 151.937px 146.75px;
                    "
                    id="el55zvq6jzkor"
                    class="animable"
                  ></path>
                  <path
                    d="M169.56,128.86c-.13.8.16,1.55.66,1.67s1-.43,1.16-1.23-.16-1.55-.66-1.67S169.7,128.06,169.56,128.86Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 170.475px 129.08px;
                    "
                    id="elmqozi65v9j"
                    class="animable"
                  ></path>
                  <path
                    d="M170.49,127.62l1.94-.1S171.23,128.79,170.49,127.62Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 171.46px 127.818px;
                    "
                    id="el0w07vxbflnhc"
                    class="animable"
                  ></path>
                  <path
                    d="M169.27,130.36a23.75,23.75,0,0,0,1.86,5.78c-1.18.74-2.83-.13-2.83-.13Z"
                    style="
                      fill: rgb(255, 86, 82);
                      transform-origin: 169.715px 133.399px;
                    "
                    id="elm884ram09s"
                    class="animable"
                  ></path>
                  <path
                    d="M169.45,135a2.35,2.35,0,0,1-.54-.07,2.29,2.29,0,0,1-1.41-1.18,7.26,7.26,0,0,1,0-5.43c1.08-3.2,3.37-5.33,5.22-4.84a2.24,2.24,0,0,1,1.4,1.18,7.26,7.26,0,0,1,0,5.43C173.15,133,171.18,135,169.45,135Zm2.75-11.09c-1.49,0-3.33,2-4.21,4.57h0a6.73,6.73,0,0,0-.05,5,1.76,1.76,0,0,0,1.09.93c1.55.4,3.66-1.66,4.62-4.51a6.8,6.8,0,0,0,0-5,1.73,1.73,0,0,0-1.09-.93A1.75,1.75,0,0,0,172.2,123.92Zm-4.45,4.49Z"
                    style="fill: #90caf9; transform-origin: 170.81px 129.205px"
                    id="elgah820wmcz5"
                    class="animable"
                  ></path>
                  <path
                    d="M172.8,123.18a.47.47,0,0,0,.16-.31.48.48,0,0,0-.46-.48,5,5,0,0,0-4.11,1.6.43.43,0,0,0,.1.63.52.52,0,0,0,.69-.1,4,4,0,0,1,3.26-1.22A.54.54,0,0,0,172.8,123.18Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 170.627px 123.54px;
                    "
                    id="elidmoertyzyj"
                    class="animable"
                  ></path>
                  <path
                    d="M144.72,119.81c-1.21,9.59-.64,15.11,1.84,19.62,5.13,9.35,17.45,9,21.44.11,3.59-8,5-22.36-3.4-28.35A12.39,12.39,0,0,0,144.72,119.81Z"
                    style="
                      fill: rgb(255, 139, 123);
                      transform-origin: 157.468px 127.475px;
                    "
                    id="elucbahuy5z6s"
                    class="animable"
                  ></path>
                  <path
                    d="M141.11,119.89c-2.55,5.73,2.56,16.09,6.95,20.89,2.72,3,11.3-1.56,16.52-10.49A14.28,14.28,0,0,0,164,119Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 152.951px 130.35px;
                    "
                    id="elsrn7jurzetn"
                    class="animable"
                  ></path>
                  <path
                    d="M174.24,129l-.09,0c-.1,0-9.65-3.66-13.39-3.22a.26.26,0,0,1-.28-.22.25.25,0,0,1,.22-.28c3.86-.47,13.23,3.1,13.63,3.25a.26.26,0,0,1,.14.33A.25.25,0,0,1,174.24,129Z"
                    style="fill: #90caf9; transform-origin: 167.482px 127.119px"
                    id="eltturn8ybqa8"
                    class="animable"
                  ></path>
                  <path
                    d="M162.5,123.55c-8.77,5-18.89,1.59-21.22-2.16s-.9-5.94-.09-6.85c-2.51-.67-4.1-4.1,3.29-7.5S173,103.89,166.14,100c6.53,1.12,4.8,4.48,2.34,4.92C181.5,107.75,173,121.17,162.5,123.55Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 157.09px 113.028px;
                    "
                    id="elmn98tuceud9"
                    class="animable"
                  ></path>
                  <path
                    d="M141.64,113.42c-2.33,2.25-5.53.77-6-1C135.22,118.81,144.44,116.69,141.64,113.42Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 138.898px 114.487px;
                    "
                    id="elrfmyeenk5x"
                    class="animable"
                  ></path>
                  <path
                    d="M160.78,129.55a6.61,6.61,0,0,0,2.69,4.65c1.91,1.27,3.63-.83,3.74-3.46.11-2.38-.76-5.89-3-6.06S160.43,127.09,160.78,129.55Z"
                    style="
                      fill: rgb(255, 139, 123);
                      transform-origin: 163.975px 129.626px;
                    "
                    id="elj8pqqt68bt"
                    class="animable"
                  ></path>
                  <path
                    d="M110.16,416.2c-7.38-1.1-7.52-2.32-11.48-3.71-3.39-1.2-4.35-1-7.08-1.95-2.29-.77-1.51-3,0-5.26.75-1.16.86-2.27,1.69-4.32l11.21,1.66c1.1,3.13,1.48,7.14,7.88,9.43C116.19,413.42,113.11,416.63,110.16,416.2Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 102.157px 408.6px;
                    "
                    id="el152u3kcwvds"
                    class="animable"
                  ></path>
                  <path
                    d="M178.56,416.23c-7.34,0-8.75-.49-12.87-.63-3.54-.13-4.12.63-7.7.63-2.37,0-2.7-2.68-1.83-4.68.68-1.56.78-3.43,1.27-5.46h10.12c1.82,3.21,6.8,5.58,12.36,6C183.89,412.36,181.5,416.23,178.56,416.23Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 168.864px 411.16px;
                    "
                    id="elbg8rcnmn50l"
                    class="animable"
                  ></path>
                  <path
                    d="M170,216.22s1.47,52.8-1.66,86.32c.2,31.47-.77,103.55-.77,103.55-.25,1.61-8.69,1-10.12,0,0,0-15.81-52.5-8.79-103.55-17.57-53.24-13.78-86.32-13.78-86.32Z"
                    style="fill: #90caf9; transform-origin: 152.44px 311.651px"
                    id="elgh7qr56psy"
                    class="animable"
                  ></path>
                  <path
                    d="M106,398.54a29.47,29.47,0,0,0-.23,4.21.88.88,0,0,1-.88.91c-4.2,0-10-1.79-11.84-2.4a.86.86,0,0,1-.58-.82l0-4a.87.87,0,0,1,1-.87l11.82,2A.87.87,0,0,1,106,398.54Z"
                    style="fill: #90caf9; transform-origin: 99.2387px 399.61px"
                    id="elsbcklhmyk4a"
                    class="animable"
                  ></path>
                  <g id="eldxe5vis8x2">
                    <path
                      d="M106,398.54a29.47,29.47,0,0,0-.23,4.21.88.88,0,0,1-.88.91c-4.2,0-10-1.79-11.84-2.4a.86.86,0,0,1-.58-.82l0-4a.87.87,0,0,1,1-.87l11.82,2A.87.87,0,0,1,106,398.54Z"
                      style="
                        fill: rgb(255, 255, 255);
                        opacity: 0.5;
                        transform-origin: 99.2387px 399.61px;
                      "
                      class="animable"
                      id="elklctjyiun"
                    ></path>
                  </g>
                  <path
                    d="M168.71,401.66c0,1.09.09,3,.19,4.48a.92.92,0,0,1-.8,1,60.4,60.4,0,0,1-11.16-.13.82.82,0,0,1-.74-.66l-.75-3.92a.93.93,0,0,1,.87-1.08l11.52-.45A.82.82,0,0,1,168.71,401.66Z"
                    style="fill: #90caf9; transform-origin: 162.171px 404.118px"
                    id="el19i0u4bx5o2"
                    class="animable"
                  ></path>
                  <g id="elc8q09iaqnlt">
                    <path
                      d="M168.71,401.66c0,1.09.09,3,.19,4.48a.92.92,0,0,1-.8,1,60.4,60.4,0,0,1-11.16-.13.82.82,0,0,1-.74-.66l-.75-3.92a.93.93,0,0,1,.87-1.08l11.52-.45A.82.82,0,0,1,168.71,401.66Z"
                      style="
                        fill: rgb(255, 255, 255);
                        opacity: 0.5;
                        transform-origin: 162.171px 404.118px;
                      "
                      class="animable"
                      id="el9p7qbm4mqob"
                    ></path>
                  </g>
                  <path
                    d="M176.67,172a180.61,180.61,0,0,1-2.51,18.27c-1.29,7.9-3,12.85-4.18,26-4.53,3.26-35.46,1.76-40.29,0,.81-11.35,1.38-26.52-2.68-52.76a9.4,9.4,0,0,1,9.47-11.14c1.6,0,3.3.11,5,.23a130.06,130.06,0,0,1,18.16,2.24c1.95.42,4,.92,5.89,1.44A15.16,15.16,0,0,1,176.67,172Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 151.778px 185.28px;
                    "
                    id="el08l3tohk274j"
                    class="animable"
                  ></path>
                  <path
                    d="M203.9,179.62a2.69,2.69,0,0,0-3.82.07l-.07.07c-1.47,1.52-3,3.14-4.56,4.62s-3.11,3-4.71,4.26a24.55,24.55,0,0,1-4.66,3.17,4.88,4.88,0,0,1-.75.3c-1-1.53-2-3.09-2.83-4.73-1.07-2-2.07-4.06-3-6.18s-1.75-4.26-2.52-6.44c-.38-1.08-.76-2.17-1.1-3.27l-.49-1.63-.44-1.53-.08-.28a5.42,5.42,0,0,0-10.48,2.73c.18.78.33,1.38.5,2s.37,1.27.56,1.9c.39,1.26.8,2.49,1.24,3.73a77.15,77.15,0,0,0,3,7.22,68.82,68.82,0,0,0,3.81,6.93,61,61,0,0,0,4.67,6.51l.12.15a4.18,4.18,0,0,0,.59.6,8.49,8.49,0,0,0,7,1.76,13.19,13.19,0,0,0,4.69-2,29.31,29.31,0,0,0,5.8-5.19,58.59,58.59,0,0,0,4.35-5.64,66.93,66.93,0,0,0,3.62-6A2.7,2.7,0,0,0,203.9,179.62Z"
                    style="
                      fill: rgb(255, 139, 123);
                      transform-origin: 184.461px 182.98px;
                    "
                    id="elhy0hxfvl7hn"
                    class="animable"
                  ></path>
                  <path
                    d="M211,173.31l-3-.36a3.48,3.48,0,0,0-3,1.1l-3.57,3.9a6.53,6.53,0,0,0-1.57,5.78l.27,1.28c4.91.94,10.91-1.65,10.91-1.65l1.8-.55a2.91,2.91,0,0,0,2-3.61l-1-3.57A3.37,3.37,0,0,0,211,173.31Z"
                    style="
                      fill: rgb(255, 139, 123);
                      transform-origin: 207.335px 179.069px;
                    "
                    id="elwm1cue9ttm"
                    class="animable"
                  ></path>
                  <path
                    d="M164.48,155.94c6.43,1.66,12.29,6.49,16.32,20.14-2.91,4.65-14.71,8.2-14.71,8.2S155.13,166.8,164.48,155.94Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 170.752px 170.11px;
                    "
                    id="elegfx56wsywb"
                    class="animable"
                  ></path>
                </g>
                <g
                  id="freepik--Plant--inject-218"
                  class="animable animator-hidden"
                  style="transform-origin: 371.47px 357.022px"
                >
                  <path
                    d="M359.62,372.61a.5.5,0,0,1-.48-.37c-.09-.37-9.21-36.45-5.68-57.37a.48.48,0,0,1,.57-.41.49.49,0,0,1,.41.57c-3.49,20.72,5.58,56.6,5.67,57a.5.5,0,0,1-.36.61Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 356.387px 343.545px;
                    "
                    id="elj2k7kkpt2v"
                    class="animable"
                  ></path>
                  <path
                    d="M353.51,318.74a.5.5,0,0,1-.5-.46.51.51,0,0,1,.46-.54,6.21,6.21,0,0,0,3.45-1.74.5.5,0,1,1,.66.75,7.23,7.23,0,0,1-4,2Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 355.388px 317.305px;
                    "
                    id="elj4rjgwqo3tf"
                    class="animable"
                  ></path>
                  <path
                    d="M353.31,325a.5.5,0,0,1-.48-.36.51.51,0,0,1,.35-.62,9.94,9.94,0,0,0,4.38-2.63.5.5,0,0,1,.71,0,.48.48,0,0,1,0,.7,10.78,10.78,0,0,1-4.82,2.89A.34.34,0,0,1,353.31,325Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 355.617px 323.121px;
                    "
                    id="elq0w4tpcgeg"
                    class="animable"
                  ></path>
                  <path
                    d="M353.39,331.87a.49.49,0,0,1-.44-.26.5.5,0,0,1,.21-.68,25,25,0,0,0,7.17-5.78.5.5,0,0,1,.76.66,26.07,26.07,0,0,1-7.47,6A.46.46,0,0,1,353.39,331.87Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 357.052px 328.423px;
                    "
                    id="elp3wb5lfk4i"
                    class="animable"
                  ></path>
                  <path
                    d="M353.73,337.17a.49.49,0,0,1-.49-.41.49.49,0,0,1,.4-.58,14.32,14.32,0,0,0,8.63-5.25.51.51,0,0,1,.71-.06.49.49,0,0,1,.06.7,15.23,15.23,0,0,1-9.23,5.59Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 358.195px 333.962px;
                    "
                    id="els35x7gqc1l"
                    class="animable"
                  ></path>
                  <path
                    d="M355.6,344.07a5.17,5.17,0,0,1-1.31-.17.5.5,0,0,1-.35-.61.49.49,0,0,1,.62-.35c1.59.43,3.62-.18,5.86-1.77a.5.5,0,1,1,.58.82A9.69,9.69,0,0,1,355.6,344.07Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 357.569px 342.573px;
                    "
                    id="elru40ybnicbb"
                    class="animable"
                  ></path>
                  <path
                    d="M356.25,351.69a2.47,2.47,0,0,1-1.08-.23.49.49,0,0,1-.25-.66.5.5,0,0,1,.66-.25c.77.35,1.55,0,2.75-.54a.5.5,0,0,1,.42.9A6,6,0,0,1,356.25,351.69Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 356.93px 350.837px;
                    "
                    id="elqasdai2a9ym"
                    class="animable"
                  ></path>
                  <path
                    d="M359,367.66a2.93,2.93,0,0,1-.58-.06.49.49,0,0,1-.4-.58.5.5,0,0,1,.58-.4,3.52,3.52,0,0,0,1.57-.16,22.89,22.89,0,0,0,6.94-3.25.5.5,0,0,1,.57.83,23.81,23.81,0,0,1-7.25,3.38A5.49,5.49,0,0,1,359,367.66Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 362.954px 365.391px;
                    "
                    id="elo7unrwek1z"
                    class="animable"
                  ></path>
                  <path
                    d="M353.08,320.73a.59.59,0,0,1-.26-.07,3.76,3.76,0,0,1-1.45-1.77.49.49,0,0,1,.26-.65.51.51,0,0,1,.66.26,2.7,2.7,0,0,0,1,1.29.5.5,0,0,1-.25.94Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 352.441px 319.466px;
                    "
                    id="elet5ptyflw9"
                    class="animable"
                  ></path>
                  <path
                    d="M353,329.08h-.07a5.31,5.31,0,0,1-2.91-1.55.51.51,0,0,1,0-.71.49.49,0,0,1,.7,0,4.25,4.25,0,0,0,2.31,1.23.51.51,0,0,1,.43.57A.51.51,0,0,1,353,329.08Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 351.67px 327.876px;
                    "
                    id="el3sufejxuxy9"
                    class="animable"
                  ></path>
                  <path
                    d="M352.91,334.64c-1.86,0-3.81-1.31-5.16-3.47a.5.5,0,0,1,.16-.69.51.51,0,0,1,.69.16c1.2,1.93,3,3.11,4.51,3a.5.5,0,0,1,.54.46.5.5,0,0,1-.47.53Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 350.662px 332.524px;
                    "
                    id="ellrm77skc0rq"
                    class="animable"
                  ></path>
                  <path
                    d="M353,341.07c-1.56,0-3.14-1-4.41-2a38.16,38.16,0,0,1-3.24-2.8.49.49,0,0,1,0-.7.5.5,0,0,1,.71,0,34.52,34.52,0,0,0,3.16,2.72c1.32,1,3,2.12,4.42,1.72a.5.5,0,0,1,.28,1A3.11,3.11,0,0,1,353,341.07Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 349.751px 338.252px;
                    "
                    id="el8lz3g2xlw7d"
                    class="animable"
                  ></path>
                  <path
                    d="M352.41,348.29a10.83,10.83,0,0,1-6.38-2,.51.51,0,0,1-.1-.7.5.5,0,0,1,.7-.1c2.64,2,6.44,2.09,7.65,1.56a.5.5,0,0,1,.66.26.51.51,0,0,1-.26.66A6.22,6.22,0,0,1,352.41,348.29Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 350.406px 346.843px;
                    "
                    id="eljp8mr0auqr"
                    class="animable"
                  ></path>
                  <path
                    d="M354.34,356.61a14.57,14.57,0,0,1-7.93-2.65.5.5,0,0,1-.13-.7.51.51,0,0,1,.7-.12c2.69,1.89,6.42,2.86,8.86,2.32a.5.5,0,0,1,.22,1A8.5,8.5,0,0,1,354.34,356.61Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 351.324px 354.831px;
                    "
                    id="elu7sn55cbqf"
                    class="animable"
                  ></path>
                  <path
                    d="M356.22,365.18a12.36,12.36,0,0,1-3.48-.58,11.68,11.68,0,0,1-6.43-4.09.5.5,0,0,1,.8-.6,10.65,10.65,0,0,0,5.91,3.73,8.71,8.71,0,0,0,4.73.35.5.5,0,0,1,.26,1A6.8,6.8,0,0,1,356.22,365.18Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 352.302px 362.447px;
                    "
                    id="elz2ywn9v97jr"
                    class="animable"
                  ></path>
                  <path
                    d="M347.4,335.9a1.73,1.73,0,1,1-1.73-1.73A1.72,1.72,0,0,1,347.4,335.9Z"
                    style="fill: #90caf9; transform-origin: 345.67px 335.9px"
                    id="elv3gqxywdh7e"
                    class="animable"
                  ></path>
                  <path
                    d="M359.61,321.75a1.73,1.73,0,1,1-1.73-1.73A1.72,1.72,0,0,1,359.61,321.75Z"
                    style="fill: #90caf9; transform-origin: 357.88px 321.75px"
                    id="elt7bdx8hqno"
                    class="animable"
                  ></path>
                  <path
                    d="M355.76,315a1.73,1.73,0,1,1-1.73-1.73A1.74,1.74,0,0,1,355.76,315Z"
                    style="fill: #90caf9; transform-origin: 354.03px 315px"
                    id="elwkbjt0reub"
                    class="animable"
                  ></path>
                  <path
                    d="M348.42,353.55a1.73,1.73,0,1,1-1.73-1.73A1.72,1.72,0,0,1,348.42,353.55Z"
                    style="fill: #90caf9; transform-origin: 346.69px 353.55px"
                    id="el6b4k78z8eux"
                    class="animable"
                  ></path>
                  <path
                    d="M371.44,371.26h-.07a.49.49,0,0,1-.42-.57c.07-.49,7.68-49.65,22.7-72.65a.5.5,0,0,1,.84.55c-14.91,22.82-22.48,71.76-22.55,72.25A.51.51,0,0,1,371.44,371.26Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 382.757px 334.537px;
                    "
                    id="el9rz7t3d6a2q"
                    class="animable"
                  ></path>
                  <path
                    d="M394.49,303a7.4,7.4,0,0,1-2.85-.5.5.5,0,0,1-.26-.66.5.5,0,0,1,.65-.26,8.16,8.16,0,0,0,5.16.06.49.49,0,0,1,.6.36.5.5,0,0,1-.36.61A11.84,11.84,0,0,1,394.49,303Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 394.572px 302.272px;
                    "
                    id="eltd30bb13yzc"
                    class="animable"
                  ></path>
                  <path
                    d="M391,310.22a13.45,13.45,0,0,1-2.75-.29.52.52,0,0,1-.39-.6.51.51,0,0,1,.6-.38,12.53,12.53,0,0,0,6.71-.44.5.5,0,0,1,.63.31.51.51,0,0,1-.31.64A14.11,14.11,0,0,1,391,310.22Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 391.839px 309.352px;
                    "
                    id="el11s1xqq5k4bd"
                    class="animable"
                  ></path>
                  <path
                    d="M384.93,318.26a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5,30.43,30.43,0,0,0,11.67-2.5.51.51,0,0,1,.65.27.5.5,0,0,1-.27.66,31.71,31.71,0,0,1-12.05,2.57Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 390.86px 316.493px;
                    "
                    id="el7pkc6xigu6u"
                    class="animable"
                  ></path>
                  <path
                    d="M388,335.16a23.22,23.22,0,0,1-5.24-.61,8.25,8.25,0,0,1-3.1-1.22.5.5,0,1,1,.57-.82,7.17,7.17,0,0,0,2.76,1.06,22.16,22.16,0,0,0,10.49-.09.5.5,0,0,1,.6.36.51.51,0,0,1-.36.61A23.89,23.89,0,0,1,388,335.16Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 386.759px 333.783px;
                    "
                    id="elwda8ozjvwj"
                    class="animable"
                  ></path>
                  <path
                    d="M385.65,344.8a28.43,28.43,0,0,1-5.88-.61,7,7,0,0,1-2.87-1.12.5.5,0,1,1,.59-.81,6.09,6.09,0,0,0,2.48.95,28.09,28.09,0,0,0,12.5-.24.5.5,0,1,1,.24,1A30.48,30.48,0,0,1,385.65,344.8Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 384.9px 343.481px;
                    "
                    id="elxsd2tgjnw1d"
                    class="animable"
                  ></path>
                  <path
                    d="M382.15,355.28c-.59,0-1.17,0-1.76,0a12.67,12.67,0,0,1-5.87-1.58.5.5,0,0,1-.16-.69.49.49,0,0,1,.68-.17,11.64,11.64,0,0,0,5.41,1.44,29.05,29.05,0,0,0,8.07-.66,14.43,14.43,0,0,0,4.87-1.92.5.5,0,0,1,.69.14.51.51,0,0,1-.14.7,15.82,15.82,0,0,1-5.21,2.06A30.09,30.09,0,0,1,382.15,355.28Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 384.223px 353.449px;
                    "
                    id="elmed8sq6yqq"
                    class="animable"
                  ></path>
                  <path
                    d="M381.3,366.16a29.78,29.78,0,0,1-6.45-.71,5.9,5.9,0,0,1-2.45-1,.5.5,0,0,1-.08-.7.5.5,0,0,1,.7-.09,5.06,5.06,0,0,0,2.05.82,29,29,0,0,0,10.09.42,8.26,8.26,0,0,0,3-.84.51.51,0,0,1,.68.21.49.49,0,0,1-.21.67,9.22,9.22,0,0,1-3.33.95A29.72,29.72,0,0,1,381.3,366.16Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 380.556px 364.858px;
                    "
                    id="elexc38r21zbp"
                    class="animable"
                  ></path>
                  <path
                    d="M390.3,304.62a.52.52,0,0,1-.42-.22,5.28,5.28,0,0,1-.8-2.9.5.5,0,0,1,1,0,4.27,4.27,0,0,0,.63,2.34.5.5,0,0,1-.13.69A.51.51,0,0,1,390.3,304.62Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 389.937px 302.81px;
                    "
                    id="eldtwdwu4t6j7"
                    class="animable"
                  ></path>
                  <path
                    d="M385.51,314.46a7.14,7.14,0,0,1-.8-1.09,8.41,8.41,0,0,1-.54-5.54.49.49,0,0,1,.58-.39.5.5,0,0,1,.4.58,7.59,7.59,0,0,0,.43,4.86,5.6,5.6,0,0,0,.69.93Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 385.099px 310.945px;
                    "
                    id="elcvlqxfseu0t"
                    class="animable"
                  ></path>
                  <path
                    d="M383.21,321.43a.48.48,0,0,1-.2,0c-2.33-1-4.1-3.85-4.62-7.38a.51.51,0,0,1,.42-.57.51.51,0,0,1,.57.42c.46,3.15,2,5.75,4,6.61a.51.51,0,0,1,.26.66A.5.5,0,0,1,383.21,321.43Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 381.032px 317.458px;
                    "
                    id="ell69yktoj579"
                    class="animable"
                  ></path>
                  <path
                    d="M380.67,329.43h-.1c-2.39-.48-4.08-3.17-5.28-5.47a55.1,55.1,0,0,1-2.47-5.37.51.51,0,0,1,.28-.65.5.5,0,0,1,.65.28,56.79,56.79,0,0,0,2.42,5.28c1.1,2.09,2.62,4.55,4.59,4.95a.49.49,0,0,1,.4.58A.51.51,0,0,1,380.67,329.43Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 376.978px 323.667px;
                    "
                    id="ell06hed1m4qc"
                    class="animable"
                  ></path>
                  <path
                    d="M377.93,338.36l-.14,0a12.77,12.77,0,0,1-5.23-2.57.5.5,0,0,1,.68-.74,11.67,11.67,0,0,0,4.84,2.35.5.5,0,0,1-.15,1Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 375.454px 336.662px;
                    "
                    id="eld7ps8p1ntl9"
                    class="animable"
                  ></path>
                  <path
                    d="M375.35,349.48l-.13,0c-3.57-1-7.78-4.62-10.23-8.9a.5.5,0,0,1,.86-.5c2.3,4,6.35,7.55,9.63,8.44a.49.49,0,0,1,.35.61A.5.5,0,0,1,375.35,349.48Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 370.397px 344.677px;
                    "
                    id="el73ll7ofw3uo"
                    class="animable"
                  ></path>
                  <path
                    d="M373.28,361h-.11a13.5,13.5,0,0,1-6.08-3.67,17.25,17.25,0,0,1-5.57-8.82.5.5,0,1,1,1-.22,16.11,16.11,0,0,0,5.27,8.31,12.61,12.61,0,0,0,5.61,3.42.49.49,0,0,1,.39.59A.5.5,0,0,1,373.28,361Z"
                    style="
                      fill: rgb(38, 50, 56);
                      transform-origin: 367.655px 354.443px;
                    "
                    id="elij38hljgb8"
                    class="animable"
                  ></path>
                  <path
                    d="M395.35,334a1.73,1.73,0,1,1-1.73-1.73A1.73,1.73,0,0,1,395.35,334Z"
                    style="fill: #90caf9; transform-origin: 393.62px 334px"
                    id="elt8f0na7n4ji"
                    class="animable"
                  ></path>
                  <path
                    d="M367.15,340.31a1.73,1.73,0,1,1-1.73-1.73A1.73,1.73,0,0,1,367.15,340.31Z"
                    style="fill: #90caf9; transform-origin: 365.42px 340.31px"
                    id="elm8hd1vb2nd"
                    class="animable"
                  ></path>
                  <path
                    d="M380.61,313.94a1.73,1.73,0,1,1-1.73-1.74A1.73,1.73,0,0,1,380.61,313.94Z"
                    style="fill: #90caf9; transform-origin: 378.88px 313.93px"
                    id="eln3ba59qiofe"
                    class="animable"
                  ></path>
                  <path
                    d="M399,302.09a1.73,1.73,0,1,1-1.73-1.74A1.73,1.73,0,0,1,399,302.09Z"
                    style="fill: #90caf9; transform-origin: 397.27px 302.08px"
                    id="eltow9m947yim"
                    class="animable"
                  ></path>
                  <path
                    d="M350.05,371.08h36.43a2.92,2.92,0,0,1,2.65,3.59l-7.58,39.2a2.77,2.77,0,0,1-2.64,2.36H357.62a2.78,2.78,0,0,1-2.64-2.36l-7.57-39.2A2.9,2.9,0,0,1,350.05,371.08Z"
                    style="fill: #90caf9; transform-origin: 368.267px 393.655px"
                    id="elehp8sqbouq9"
                    class="animable"
                  ></path>
                </g>
                <defs>
                  <filter id="active" height="200%">
                    <feMorphology
                      in="SourceAlpha"
                      result="DILATED"
                      operator="dilate"
                      radius="2"
                    ></feMorphology>
                    <feFlood
                      flood-color="#32DFEC"
                      flood-opacity="1"
                      result="PINK"
                    ></feFlood>
                    <feComposite
                      in="PINK"
                      in2="DILATED"
                      operator="in"
                      result="OUTLINE"
                    ></feComposite>
                    <feMerge>
                      <feMergeNode in="OUTLINE"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                  <filter id="hover" height="200%">
                    <feMorphology
                      in="SourceAlpha"
                      result="DILATED"
                      operator="dilate"
                      radius="2"
                    ></feMorphology>
                    <feFlood
                      flood-color="#ff0000"
                      flood-opacity="0.5"
                      result="PINK"
                    ></feFlood>
                    <feComposite
                      in="PINK"
                      in2="DILATED"
                      operator="in"
                      result="OUTLINE"
                    ></feComposite>
                    <feMerge>
                      <feMergeNode in="OUTLINE"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                    <feColorMatrix
                      type="matrix"
                      values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
                    ></feColorMatrix>
                  </filter>
                </defs>
              </svg>
            </div>
            <div class="relative w-full max-w-lg mx-auto">
              <!-- Main floating card -->
              <div
                class="relative p-8 transition-all duration-500 transform border shadow-2xl bg-white/80 backdrop-blur-lg rounded-3xl border-white/20 hover:scale-105"
                style="animation: float 6s ease-in-out infinite"
              >
                <div class="flex items-center mb-6 space-x-4">
                  <div
                    class="flex items-center justify-center w-8 h-8 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl"
                  >
                    <CodeIcon class="w-4 h-4 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3
                      class="text-lg font-bold text-gray-800 font-bricolage-grotesque"
                    >
                      Build your Future with Us
                    </h3>
                    <p class="text-sm text-gray-600">We're committed to you</p>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="text-sm text-gray-700"
                      >Excellence & Innovation</span
                    >
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span class="text-sm text-gray-700"
                      >Inclusivity & Equity</span
                    >
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span class="text-sm text-gray-700"
                      >Continuous Growth & Learning</span
                    >
                  </div>
                </div>
              </div>

              <!-- Floating elements -->
              <div
                class="absolute w-16 h-16 lg:w-24 lg:h-24 transition-transform duration-300 transform -top-4 -right-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-80 rotate-12 hover:rotate-0"
                style="animation: float 6s ease-in-out infinite 2s"
              >
                <div class="flex items-center justify-center w-full h-full">
                  <TrendingUpIcon class="w-8 h-8 text-white" />
                </div>
              </div>

              <div
                class="absolute w-16 h-16 lg:w-20 lg:h-20 transition-transform duration-300 transform -bottom-6 -left-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl opacity-80 -rotate-12 hover:rotate-0"
                style="animation: float 6s ease-in-out infinite 4s"
              >
                <div class="flex items-center justify-center w-full h-full">
                  <UsersIcon class="w-6 h-6 text-white" />
                </div>
              </div>

              <!-- Background decorative elements -->
              <div
                class="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-20 blur-3xl -z-10"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="relative z-10 py-24 bg-white/50 backdrop-blur-sm">
      <div class="container px-6 mx-auto">
        <div class="mb-16 text-center" v-motion-fade-visible>
          <h2
            class="mb-6 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text font-bricolage-grotesque"
          >
            Why Choose Us?
          </h2>
          <p class="max-w-3xl mx-auto text-xl text-gray-600">
            We provide comprehensive support and cutting-edge curriculum
            designed for the modern tech landscape
          </p>
        </div>

        <div
          class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          v-motion-slide-visible-bottom
        >
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="p-8 transition-all duration-300 border shadow-lg group bg-white/80 backdrop-blur-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 border-white/20"
          >
            <div
              class="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl group-hover:scale-110"
            >
              <component :is="feature.icon" class="w-8 h-8 text-white" />
            </div>
            <h3
              class="mb-4 text-xl font-bold text-gray-800 font-bricolage-grotesque"
            >
              {{ feature.title }}
            </h3>
            <p class="leading-relaxed text-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="relative z-10 py-24">
      <div class="container px-6 mx-auto">
        <div class="mb-16 text-center" v-motion-fade-visible>
          <h2
            class="mb-6 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text font-bricolage-grotesque"
          >
            Our Mission
          </h2>
          <div
            class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
          ></div>
        </div>

        <div class="max-w-4xl mx-auto">
          <div
            class="p-12 transition-all duration-500 border shadow-2xl bg-white/80 backdrop-blur-lg rounded-3xl border-white/20 hover:shadow-3xl"
            v-motion-slide-visible-left
          >
            <div class="grid items-center gap-12 lg:grid-cols-2">
              <div class="space-y-6">
                <div class="space-y-4 leading-relaxed text-gray-700">
                  <p class="text-xl font-semibold text-gray-800">
                    Our mission is to empower individuals across Africa and
                    other underserved regions to unlock their full potential.
                  </p>
                  <p>
                    We are dedicated to dismantling systemic barriers that limit
                    access to crucial resources and opportunities, fostering a
                    world where talent and ambition are not constrained by
                    circumstance.
                  </p>
                  <p
                    class="text-lg font-medium text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text"
                  >
                    Cultivating a more equitable and prosperous future for all.
                  </p>
                </div>
                <div class="flex items-center pt-4 space-x-4">
                  <div class="flex -space-x-2">
                    <div
                      class="w-10 h-10 border-2 border-white rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
                    ></div>
                    <div
                      class="w-10 h-10 border-2 border-white rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600"
                    ></div>
                    <div
                      class="w-10 h-10 border-2 border-white rounded-full bg-gradient-to-br from-purple-400 to-purple-600"
                    ></div>
                  </div>
                  <span class="font-medium text-gray-600"
                    >Join 250+ students worldwide</span
                  >
                </div>
              </div>
              <div class="relative">
                <div
                  class="flex items-center justify-center w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl"
                >
                  <GlobeIcon class="w-24 h-24 text-blue-600 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section
      class="relative z-10 py-24 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute inset-0">
        <div
          class="absolute top-0 left-0 rounded-full w-72 h-72 bg-white/10 blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-white/5 blur-3xl"
        ></div>
      </div>

      <div class="container relative px-6 mx-auto">
        <div class="mb-16 text-center" v-motion-fade-visible>
          <h2
            class="mb-6 text-4xl font-bold lg:text-5xl font-bricolage-grotesque"
          >
            Our Impact
          </h2>
          <div class="w-24 h-1 mx-auto bg-white rounded-full"></div>
        </div>

        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="space-y-8" v-motion-slide-visible-right>
            <div
              class="p-8 transition-all duration-300 border bg-white/10 backdrop-blur-lg rounded-2xl border-white/20 hover:bg-white/20"
            >
              <p class="mb-6 text-xl leading-relaxed">
                We've helped hundreds transition into tech careers. Our alumni
                work with companies globally, and we continue to create new
                success stories every day through our growing network.
              </p>
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                  <StarIcon class="w-5 h-5 text-yellow-400" />
                  <span class="font-semibold">4.9/5 Rating</span>
                </div>
                <div class="w-px h-6 bg-white/30"></div>
                <div class="flex items-center space-x-2">
                  <TrophyIcon class="w-5 h-5 text-yellow-400" />
                  <span class="font-semibold">95% Job Placement</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="mb-2 text-3xl font-bold">500+</div>
                <div class="text-white/80">Graduates</div>
              </div>
              <div class="text-center">
                <div class="mb-2 text-3xl font-bold">50+</div>
                <div class="text-white/80">Partner Companies</div>
              </div>
            </div>
          </div>

          <div class="relative" v-motion-fade-visible>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div
                  class="p-6 transition-all duration-300 transform border bg-white/10 backdrop-blur-lg rounded-xl border-white/20 hover:scale-105"
                >
                  <BrainIcon class="w-8 h-8 mb-3 text-white" />
                  <h4 class="mb-2 font-semibold font-bricolage-grotesque">
                    AI & Machine Learning
                  </h4>
                  <p class="text-sm text-white/80">Cutting-edge curriculum</p>
                </div>
                <div
                  class="p-6 transition-all duration-300 transform border bg-white/10 backdrop-blur-lg rounded-xl border-white/20 hover:scale-105"
                >
                  <ShieldIcon class="w-8 h-8 mb-3 text-white" />
                  <h4 class="mb-2 font-semibold font-bricolage-grotesque">
                    Cybersecurity
                  </h4>
                  <p class="text-sm text-white/80">
                    Industry-standard training
                  </p>
                </div>
              </div>
              <div class="mt-8 space-y-4">
                <div
                  class="p-6 transition-all duration-300 transform border bg-white/10 backdrop-blur-lg rounded-xl border-white/20 hover:scale-105"
                >
                  <SmartphoneIcon class="w-8 h-8 mb-3 text-white" />
                  <h4 class="mb-2 font-semibold font-bricolage-grotesque">
                    Mobile Development
                  </h4>
                  <p class="text-sm text-white/80">iOS & Android apps</p>
                </div>
                <div
                  class="p-6 transition-all duration-300 transform border bg-white/10 backdrop-blur-lg rounded-xl border-white/20 hover:scale-105"
                >
                  <DatabaseIcon class="w-8 h-8 mb-3 text-white" />
                  <h4 class="mb-2 font-semibold font-bricolage-grotesque">
                    Data Science
                  </h4>
                  <p class="text-sm text-white/80">Analytics & insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section class="relative z-10 py-24 bg-white/50 backdrop-blur-sm">
      <div class="container px-6 mx-auto">
        <div class="mb-16 text-center" v-motion-fade-visible>
          <h2
            class="mb-6 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text font-bricolage-grotesque"
          >
            Ready to Get Started?
          </h2>
          <p class="text-xl text-gray-600">Choose your path to success</p>
        </div>

        <div class="max-w-6xl mx-auto">
          <!-- Enhanced Tabs -->
          <div
            class="flex flex-wrap justify-center gap-4 mb-12"
            v-motion-slide-visible-bottom
          >
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="activeTab = index"
              class="relative px-8 py-4 font-semibold transition-all duration-300 group rounded-2xl hover:scale-105"
              :class="
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
                  : 'bg-white/80 backdrop-blur-lg text-gray-700 hover:bg-white border border-gray-200'
              "
            >
              <span class="relative z-10 flex items-center space-x-2">
                <component :is="tab.icon" class="w-5 h-5" />
                <span>{{ tab.name }}</span>
              </span>
              <div
                v-if="activeTab === index"
                class="absolute inset-0 opacity-50 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur"
              ></div>
            </button>
          </div>

          <!-- Enhanced Tab Content -->
          <Transition name="tab-content" mode="out-in">
            <div
              :key="activeTab"
              class="p-12 border shadow-2xl bg-white/80 backdrop-blur-lg rounded-3xl border-white/20"
            >
              <div class="grid items-center gap-12 lg:grid-cols-2">
                <div class="space-y-6">
                  <div
                    class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
                  >
                    <component :is="tabs[activeTab].icon" class="w-4 h-4" />
                    <span>{{ tabs[activeTab].category }}</span>
                  </div>
                  <h3
                    class="text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text font-bricolage-grotesque"
                  >
                    {{ tabs[activeTab].title }}
                  </h3>
                  <p class="text-lg leading-relaxed text-gray-600">
                    {{ tabs[activeTab].description }}
                  </p>

                  <div class="space-y-3">
                    <div
                      v-for="(feature, idx) in tabs[activeTab].features"
                      :key="idx"
                      class="flex items-center space-x-3"
                    >
                      <div
                        class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                      ></div>
                      <span class="text-gray-700">{{ feature }}</span>
                    </div>
                  </div>

                  <button
                    class="flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-2xl hover:scale-105 hover:shadow-xl"
                  >
                    <component
                      :is="tabs[activeTab].buttonIcon"
                      class="w-5 h-5"
                    />
                    <span>{{ tabs[activeTab].buttonText }}</span>
                  </button>
                </div>

                <div class="relative">
                  <div
                    class="relative flex items-center justify-center w-full overflow-hidden h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl"
                  >
                    <component
                      :is="tabs[activeTab].illustration"
                      class="w-32 h-32 text-blue-600 opacity-50"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section
      class="relative z-10 py-24 overflow-hidden text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute inset-0">
        <div
          class="absolute top-0 right-0 rounded-full w-96 h-96 bg-white/10 blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-0 left-0 rounded-full w-72 h-72 bg-white/5 blur-3xl animate-pulse animation-delay-2000"
        ></div>
      </div>

      <div class="container relative px-6 mx-auto">
        <div class="max-w-4xl mx-auto text-center" v-motion-fade-visible>
          <div class="space-y-8">
            <div class="space-y-4">
              <div
                class="inline-flex items-center px-6 py-3 space-x-2 text-sm font-medium border rounded-full bg-white/20 backdrop-blur-lg border-white/30"
              >
                <MailIcon class="w-4 h-4" />
                <span>Stay Updated</span>
              </div>

              <h2
                class="mb-6 text-4xl font-bold lg:text-5xl font-bricolage-grotesque"
              >
                Join Our Tech Community
              </h2>

              <p
                class="max-w-2xl mx-auto text-xl leading-relaxed text-white/90"
              >
                Get the latest insights on tech careers, industry trends, and
                exclusive opportunities delivered straight to your inbox.
              </p>
            </div>

            <!-- Newsletter Form -->
            <div class="max-w-2xl mx-auto" v-motion-slide-visible-bottom>
              <form @submit.prevent="subscribeNewsletter" class="space-y-6">
                <div class="relative">
                  <div class="flex flex-col gap-4 sm:flex-row">
                    <div class="relative flex-1">
                      <input
                        v-model="newsletter.email"
                        type="email"
                        placeholder="Enter your email address"
                        class="w-full px-6 py-4 text-white transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/30 rounded-2xl placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                        :class="{
                          'border-red-400 focus:ring-red-400':
                            newsletter.error && newsletter.email,
                          'border-green-400 focus:ring-green-400':
                            newsletter.isValid && newsletter.email,
                        }"
                        @input="validateEmail"
                        @blur="validateEmail"
                      />

                      <!-- Validation Icons -->
                      <div
                        class="absolute transform -translate-y-1/2 right-4 top-1/2"
                      >
                        <Transition name="validation-icon">
                          <CheckCircleIcon
                            v-if="newsletter.isValid && newsletter.email"
                            class="w-5 h-5 text-green-400"
                          />
                          <XCircleIcon
                            v-else-if="newsletter.error && newsletter.email"
                            class="w-5 h-5 text-red-400"
                          />
                        </Transition>
                      </div>
                    </div>

                    <button
                      type="submit"
                      :disabled="
                        newsletter.isLoading ||
                        !newsletter.isValid ||
                        !newsletter.email
                      "
                      class="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2 min-w-[140px]"
                    >
                      <Transition name="button-content" mode="out-in">
                        <div
                          v-if="newsletter.isLoading"
                          class="flex items-center space-x-2"
                        >
                          <div
                            class="w-4 h-4 border-2 border-indigo-600 rounded-full border-t-transparent animate-spin"
                          ></div>
                          <span>Subscribing...</span>
                        </div>
                        <div v-else class="flex items-center space-x-2">
                          <SendIcon class="w-4 h-4" />
                          <span>Subscribe</span>
                        </div>
                      </Transition>
                    </button>
                  </div>

                  <!-- Error Message -->
                  <Transition name="error-message">
                    <div
                      v-if="newsletter.error && newsletter.email"
                      class="flex items-center mt-3 space-x-2 text-red-300"
                    >
                      <AlertCircleIcon class="w-4 h-4" />
                      <span class="text-sm">{{ newsletter.error }}</span>
                    </div>
                  </Transition>
                </div>

                <!-- Privacy Notice -->
                <p class="text-sm leading-relaxed text-white/70">
                  By subscribing, you agree to receive marketing emails from
                  Tech Talent Trainers. You can unsubscribe at any time.
                  <a
                    href="#"
                    class="underline transition-colors duration-200 hover:text-white"
                    >Privacy Policy</a
                  >
                </p>
              </form>

              <!-- Success Message -->
              <Transition name="success-message">
                <div
                  v-if="newsletter.isSubscribed"
                  class="p-6 mt-8 border bg-green-500/20 backdrop-blur-lg border-green-400/30 rounded-2xl"
                >
                  <div class="flex items-center justify-center mb-4 space-x-3">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full"
                    >
                      <CheckIcon class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold">
                        Welcome to our community!
                      </h3>
                      <p class="text-green-100">
                        Check your email for a confirmation message.
                      </p>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Newsletter Benefits -->
            <div
              class="grid gap-8 mt-16 md:grid-cols-3"
              v-motion-slide-visible-bottom
            >
              <div
                v-for="(benefit, index) in newsletterBenefits"
                :key="index"
                class="space-y-4 text-center group"
              >
                <div
                  class="flex items-center justify-center w-16 h-16 mx-auto transition-transform duration-300 border bg-white/10 backdrop-blur-lg rounded-2xl group-hover:scale-110 border-white/20"
                >
                  <component :is="benefit.icon" class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4
                    class="mb-2 text-lg font-semibold font-bricolage-grotesque"
                  >
                    {{ benefit.title }}
                  </h4>
                  <p class="text-sm text-white/80">{{ benefit.description }}</p>
                </div>
              </div>
            </div>

            <!-- Subscriber Count -->
            <div
              class="flex items-center justify-center mt-12 space-x-4 text-white/80"
              v-motion-fade-visible
            >
              <div class="flex -space-x-2">
                <div
                  class="w-8 h-8 border-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-white/30"
                ></div>
                <div
                  class="w-8 h-8 border-2 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-white/30"
                ></div>
                <div
                  class="w-8 h-8 border-2 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-white/30"
                ></div>
                <div
                  class="flex items-center justify-center w-8 h-8 border-2 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-white/30"
                >
                  <span class="text-xs font-bold text-white">+</span>
                </div>
              </div>
              <span class="text-sm font-medium"
                >Join 1,200+ subscribers already learning</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="relative z-10 py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div class="container px-6 mx-auto">
        <div class="mb-16 text-center" v-motion-fade-visible>
          <h2
            class="mb-6 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text font-bricolage-grotesque"
          >
            Get In Touch
          </h2>
          <p class="text-xl text-gray-600">
            Ready to start your journey? We're here to help
          </p>
        </div>

        <div class="grid max-w-4xl gap-12 mx-auto lg:grid-cols-2">
          <div class="space-y-8" v-motion-slide-visible-left>
            <div class="space-y-6">
              <h3
                class="text-2xl font-bold text-gray-800 font-bricolage-grotesque"
              >
                Let's Connect
              </h3>
              <p class="leading-relaxed text-gray-600">
                Have questions about our programs? Want to learn more about
                partnership opportunities? We'd love to hear from you.
              </p>
            </div>

            <div class="space-y-4">
              <div
                class="flex items-center p-4 space-x-4 border bg-white/80 backdrop-blur-lg rounded-xl border-white/20"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl"
                >
                  <MailIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <div class="font-semibold text-gray-800">Email Us</div>
                  <div class="text-gray-600">
                    tech.talenttraininers@gmail.com
                  </div>
                </div>
              </div>

              <div
                class="flex items-center p-4 space-x-4 border bg-white/80 backdrop-blur-lg rounded-xl border-white/20"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl"
                >
                  <PhoneIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <div class="font-semibold text-gray-800">Call Us</div>
                  <div class="text-gray-600">
                    +447 547 797 067 | +234 906 348 1249
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="p-8 border shadow-xl bg-white/80 backdrop-blur-lg rounded-2xl border-white/20"
            v-motion-slide-visible-right
          >
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm font-semibold text-gray-700"
                    >First Name</label
                  >
                  <input
                    type="text"
                    class="w-full px-4 py-3 transition-all duration-200 border border-gray-200 bg-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-semibold text-gray-700"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    class="w-full px-4 py-3 transition-all duration-200 border border-gray-200 bg-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700"
                  >Email</label
                >
                <input
                  type="email"
                  class="w-full px-4 py-3 transition-all duration-200 border border-gray-200 bg-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700"
                  >Message</label
                >
                <textarea
                  rows="4"
                  class="w-full px-4 py-3 transition-all duration-200 border border-gray-200 resize-none bg-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                class="flex items-center justify-center w-full px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl hover:scale-105 hover:shadow-xl"
              >
                <SendIcon class="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Footer -->
    <footer
      class="relative z-10 py-16 text-white bg-gradient-to-br from-gray-900 to-black"
    >
      <div class="container px-6 mx-auto">
        <div class="grid gap-12 mb-12 lg:grid-cols-4">
          <div class="space-y-6 lg:col-span-2">
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 transform bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl rotate-12"
              ></div>
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
                    <circle cx="4" cy="4" r="2" /></svg
                ></span>
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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  UserPlusIcon,
  MenuIcon,
  SparklesIcon,
  RocketIcon,
  PlayIcon,
  CodeIcon,
  TrendingUpIcon,
  UsersIcon,
  GlobeIcon,
  StarIcon,
  TrophyIcon,
  BrainIcon,
  ShieldIcon,
  SmartphoneIcon,
  DatabaseIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
  BookOpenIcon,
  BriefcaseIcon,
  SettingsIcon,
  HeartHandshakeIcon,
  GraduationCapIcon,
  BuildingIcon,
  CogIcon,
  HandshakeIcon,
  CheckCircleIcon,
  XCircleIcon,
  AlertCircleIcon,
  CheckIcon,
} from "lucide-vue-next";

// Reactive data
const scrolled = ref(false);
const activeTab = ref(0);
const animatedStats = ref([0, 0, 0]);
const mobileMenuOpen = ref(false);

// Newsletter reactive data
const newsletter = ref({
  email: "",
  isLoading: false,
  isSubscribed: false,
  isValid: false,
  error: "",
});

// Statistics data
const stats = [
  { value: 250, suffix: "+", label: "students" },
  { value: 3, suffix: "+", label: "cohorts" },
  { value: 100, suffix: "%", label: "mobile friendly" },
];

// Features data
const features = [
  {
    icon: BookOpenIcon,
    title: "Comprehensive Curriculum",
    description:
      "Industry-aligned courses covering the latest technologies and best practices in software development.",
  },
  {
    icon: UsersIcon,
    title: "Expert Mentorship",
    description:
      "Learn from experienced professionals who provide personalized guidance throughout your journey.",
  },
  {
    icon: BriefcaseIcon,
    title: "Career Support",
    description:
      "Job placement assistance, interview preparation, and ongoing career development support.",
  },
  {
    icon: GlobeIcon,
    title: "Global Network",
    description:
      "Connect with a worldwide community of learners, mentors, and industry professionals.",
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile-First Learning",
    description:
      "Access courses and resources from anywhere with our mobile-optimized platform.",
  },
  {
    icon: TrophyIcon,
    title: "Proven Results",
    description:
      "95% job placement rate with graduates working at top tech companies globally.",
  },
];

// Enhanced tabs data
const tabs = [
  {
    name: "Learn Tech Skills",
    icon: GraduationCapIcon,
    category: "Education",
    title: "Learn In-Demand Skills & Become Job Ready",
    description:
      "Our comprehensive curriculum covers the most sought-after digital skills in today's market, from software engineering to data science.",
    features: [
      "Full-stack web development",
      "Mobile app development",
      "Data science & analytics",
      "Cloud computing & DevOps",
      "Cybersecurity fundamentals",
    ],
    buttonText: "Apply to Cohort",
    buttonIcon: RocketIcon,
    illustration: CodeIcon,
  },
  {
    name: "Hire Talent",
    icon: BuildingIcon,
    category: "Recruitment",
    title: "Hire Skilled Tech Professionals",
    description:
      "Access our network of trained, job-ready professionals who have completed rigorous training programs.",
    features: [
      "Pre-vetted candidates",
      "Diverse skill sets",
      "Global talent pool",
      "Ongoing support",
      "Quality guarantee",
    ],
    buttonText: "Find Talent",
    buttonIcon: UsersIcon,
    illustration: BriefcaseIcon,
  },
  {
    name: "Outsource Projects",
    icon: CogIcon,
    category: "Services",
    title: "Outsource Your Technical Projects",
    description:
      "Let our experienced development teams handle your projects while you focus on growing your business.",
    features: [
      "End-to-end development",
      "Agile methodology",
      "Quality assurance",
      "Timely delivery",
      "Ongoing maintenance",
    ],
    buttonText: "Start Project",
    buttonIcon: SettingsIcon,
    illustration: DatabaseIcon,
  },
  {
    name: "Partner with Us",
    icon: HandshakeIcon,
    category: "Partnership",
    title: "Partner with Us for Impact",
    description:
      "Join our mission to create opportunities and drive positive change in tech education across underserved communities.",
    features: [
      "Corporate partnerships",
      "Scholarship programs",
      "Curriculum development",
      "Mentorship opportunities",
      "Social impact initiatives",
    ],
    buttonText: "Become Partner",
    buttonIcon: HeartHandshakeIcon,
    illustration: GlobeIcon,
  },
];

// Newsletter benefits data
const newsletterBenefits = [
  {
    icon: TrendingUpIcon,
    title: "Industry Insights",
    description: "Latest trends and opportunities in the tech industry",
  },
  {
    icon: GraduationCapIcon,
    title: "Learning Resources",
    description: "Exclusive tutorials, guides, and course updates",
  },
  {
    icon: BriefcaseIcon,
    title: "Job Opportunities",
    description: "Early access to job openings and career opportunities",
  },
];

// Custom directives for animations
const vMotionFadeVisible = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  },
};

const vMotionSlideVisibleLeft = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    el.style.opacity = "0";
    el.style.transform = "translateX(-60px)";
    el.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  },
};

const vMotionSlideVisibleRight = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    el.style.opacity = "0";
    el.style.transform = "translateX(60px)";
    el.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  },
};

const vMotionSlideVisibleBottom = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

            // Stagger animation for children
            const children = el.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";

    // Prepare children for stagger animation
    const children = el.children;
    Array.from(children).forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(20px)";
      child.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    observer.observe(el);
  },
};

// Newsletter functions
const validateEmail = () => {
  const email = newsletter.value.email.trim();

  if (!email) {
    newsletter.value.error = "";
    newsletter.value.isValid = false;
    return;
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    newsletter.value.error = "Please enter a valid email address";
    newsletter.value.isValid = false;
    return;
  }

  // Additional validation for common mistakes
  const domain = email.split("@")[1]?.toLowerCase();

  if (domain && domain.includes(".") && domain.split(".").length >= 2) {
    newsletter.value.error = "";
    newsletter.value.isValid = true;
  } else {
    newsletter.value.error = "Please check your email domain";
    newsletter.value.isValid = false;
  }
};

const subscribeNewsletter = async () => {
  if (!newsletter.value.isValid || !newsletter.value.email) return;

  newsletter.value.isLoading = true;
  newsletter.value.error = "";

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate random success/failure for demo
    const success = Math.random() > 0.1; // 90% success rate

    if (success) {
      newsletter.value.isSubscribed = true;
      newsletter.value.email = "";
      newsletter.value.isValid = false;

      // Reset success message after 5 seconds
      setTimeout(() => {
        newsletter.value.isSubscribed = false;
      }, 5000);
    } else {
      newsletter.value.error = "Something went wrong. Please try again.";
    }
  } catch (error) {
    newsletter.value.error =
      "Network error. Please check your connection and try again.";
  } finally {
    newsletter.value.isLoading = false;
  }
};

// Other functions
const animateStats = () => {
  stats.forEach((stat, index) => {
    let current = 0;
    const increment = stat.value / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        animatedStats.value[index] = stat.value;
        clearInterval(timer);
      } else {
        animatedStats.value[index] = Math.floor(current);
      }
    }, 30);
  });
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const submitForm = () => {
  // Handle form submission
  console.log("Form submitted");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Trigger stats animation after a delay
  setTimeout(() => {
    animateStats();
  }, 1500);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.main-heading {
  line-height: 85%;
  letter-spacing: -1.5px;
}
</style>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  33% {
    transform: translateY(-10px) rotate(1deg);
  }

  66% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

@keyframes blob {
  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Tab content transitions */
.tab-content-enter-active,
.tab-content-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-content-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.tab-content-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

/* Newsletter validation transitions */
.validation-icon-enter-active,
.validation-icon-leave-active {
  transition: all 0.3s ease;
}

.validation-icon-enter-from,
.validation-icon-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Button content transitions */
.button-content-enter-active,
.button-content-leave-active {
  transition: all 0.2s ease;
}

.button-content-enter-from,
.button-content-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Error message transitions */
.error-message-enter-active,
.error-message-leave-active {
  transition: all 0.3s ease;
}

.error-message-enter-from,
.error-message-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Success message transitions */
.success-message-enter-active,
.success-message-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.success-message-enter-from,
.success-message-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #6366f1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #4f46e5);
}

/* SVG FREEPIKs */
svg#freepik_stories-code-snippets:not(.animated) .animable {
  opacity: 0;
}

svg#freepik_stories-code-snippets.animated
  #freepik--background-complete--inject-218 {
  animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn;
  animation-delay: 0s;
}

svg#freepik_stories-code-snippets.animated #freepik--Window--inject-218 {
  animation: 1.5s Infinite linear floating;
  animation-delay: 0s;
}

svg#freepik_stories-code-snippets.animated #freepik--Code--inject-218 {
  animation: 3s Infinite linear floating;
  animation-delay: 0s;
}

svg#freepik_stories-code-snippets.animated #freepik--Character--inject-218 {
  animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
  animation-delay: 0s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes floating {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animator-hidden {
  display: none;
}
</style>
