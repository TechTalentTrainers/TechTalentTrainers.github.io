<template>
  <div class="min-h-screen overflow-x-hidden bg-white">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div class="container px-6 mx-auto text-center">
        <h1 class="mb-6 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text font-bricolage-grotesque">
          Our Blog
        </h1>
        <p class="max-w-3xl mx-auto text-xl text-gray-600">
          Stay updated with the latest news, insights, and stories from Tech Talent Trainers.
        </p>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="container px-6 py-12 mx-auto">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Blog Post 1 -->
        <div class="overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-lg rounded-2xl border-white/20 hover:shadow-2xl hover:-translate-y-2">
          <img src="https://via.placeholder.com/400x250" alt="Blog Post 1" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center mb-4 space-x-2">
              <span class="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Tech</span>
              <span class="text-sm text-gray-500">June 1, 2023</span>
            </div>
            <h2 class="mb-4 text-xl font-bold text-gray-800 font-bricolage-grotesque">
              Breaking Down Barriers to Tech Careers
            </h2>
            <p class="mb-4 text-gray-600">
              Learn how we are helping individuals overcome obstacles and achieve their dreams in the tech industry.
            </p>
            <router-link to="/blog/post1" class="inline-flex items-center text-blue-600 hover:text-blue-800">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Blog Post 2 -->
        <div class="overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-lg rounded-2xl border-white/20 hover:shadow-2xl hover:-translate-y-2">
          <img src="https://via.placeholder.com/400x250" alt="Blog Post 2" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center mb-4 space-x-2">
              <span class="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Education</span>
              <span class="text-sm text-gray-500">May 15, 2023</span>
            </div>
            <h2 class="mb-4 text-xl font-bold text-gray-800 font-bricolage-grotesque">
              The Future of Tech Education
            </h2>
            <p class="mb-4 text-gray-600">
              Explore the latest trends and innovations in tech education and how they are shaping the future.
            </p>
            <router-link to="/blog/post2" class="inline-flex items-center text-blue-600 hover:text-blue-800">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Blog Post 3 -->
        <div class="overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-lg rounded-2xl border-white/20 hover:shadow-2xl hover:-translate-y-2">
          <img src="https://via.placeholder.com/400x250" alt="Blog Post 3" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center mb-4 space-x-2">
              <span class="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Career</span>
              <span class="text-sm text-gray-500">April 20, 2023</span>
            </div>
            <h2 class="mb-4 text-xl font-bold text-gray-800 font-bricolage-grotesque">
              How to Land Your Dream Tech Job
            </h2>
            <p class="mb-4 text-gray-600">
              Discover the secrets to landing your dream job in the tech industry with these expert tips.
            </p>
            <router-link to="/blog/post3" class="inline-flex items-center text-blue-600 hover:text-blue-800">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'BlogIndex',
};
</script>

<style scoped>
.main-heading {
  line-height: 85%;
  letter-spacing: -1.5px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(-5px) rotate(-1deg);
  }
}
</style>