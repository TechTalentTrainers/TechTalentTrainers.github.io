<template>
  <div class="min-h-screen overflow-x-hidden bg-white">
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg">
      <div class="container px-6 py-4 mx-auto">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            Tech Talent Trainers
          </div>
          <div class="hidden space-x-8 md:flex">
            <router-link to="/" class="text-gray-700 hover:text-blue-600">Home</router-link>
            <router-link to="/about" class="text-gray-700 hover:text-blue-600">About</router-link>
            <router-link to="/blog" class="text-blue-600 font-semibold">Blog</router-link>
            <router-link to="/contact" class="text-gray-700 hover:text-blue-600">Contact</router-link>
          </div>
          <button class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

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

    <!-- Newsletter Section -->
    <section class="py-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div class="container px-6 mx-auto text-center">
        <h2 class="mb-6 text-3xl font-bold lg:text-4xl font-bricolage-grotesque">
          Subscribe to Our Newsletter
        </h2>
        <p class="max-w-2xl mx-auto mb-8 text-xl leading-relaxed">
          Get the latest insights on tech careers, industry trends, and exclusive opportunities delivered straight to your inbox.
        </p>
        <form class="max-w-xl mx-auto">
          <div class="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <input type="email" placeholder="Enter your email address" class="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white">
            <button type="submit" class="px-6 py-3 font-semibold text-indigo-600 bg-white rounded-lg hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-gray-900 text-white">
      <div class="container px-6 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 class="mb-4 text-xl font-bold">Tech Talent Trainers</h3>
            <p class="text-gray-400">
              We connect individuals with learning and career opportunities that are growth-friendly and tailored for their social context.
            </p>
          </div>
          <div>
            <h4 class="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-gray-400 hover:text-white">Home</router-link></li>
              <li><router-link to="/about" class="text-gray-400 hover:text-white">About</router-link></li>
              <li><router-link to="/blog" class="text-gray-400 hover:text-white">Blog</router-link></li>
              <li><router-link to="/contact" class="text-gray-400 hover:text-white">Contact</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul class="space-y-2">
              <li class="text-gray-400">tech.talenttrainers@gmail.com</li>
              <li class="text-gray-400">+447 547 797 067</li>
              <li class="text-gray-400">+234 906 348 1249</li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 text-lg font-semibold">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143.487-.047 1.562-.145 2.795-.145 2.766 0 4.659 1.687 4.659 4.788v2.672h-3.128c-1.804 0-2.444 1.239-2.444 2.749v2.213h3.128v9.293h3.128c.733 0 1.325-.593 1.325-1.325v-21.35c0-.732-.592-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.3c3.1 0 5.6 2.5 5.6 5.6 0 1.6-.6 3-1.5 4.1-.2.3-.5.5-.8.6 3.1-.8 5.6-3.7 5.6-7.2 0-.4 0-.7-.1-1.1 1.4.8 2.3 2.4 2.3 4.4 0 2.7-2.2 4.9-4.9 4.9-1.2 0-2.3-.4-3.2-1.1.9.4 1.9.7 3 .7 2.8 0 4.9-2.2 4.9-4.9 0-.3 0-.6-.1-.9-1.3.8-2.8 1.3-4.4 1.3-2.9 0-5.3-2.4-5.3-5.3 0-.2 0-.4.1-.6-2.7.7-4.9 2.8-4.9 5.3 0 1.5.6 2.9 1.5 3.9-.2 0-.4 0-.6-.1 0-2.8 2.2-5 4.9-5 .4 0 .7 0 1.1.1-1.3-.8-2.8-1.3-4.4-1.3-2.9 0-5.3 2.4-5.3 5.3 0 1.5.6 2.9 1.5 3.9-.9-.4-1.9-.7-3-.7-3.1 0-5.6-2.5-5.6-5.6 0-.4 0-.7.1-1.1 1.4.8 2.3 2.4 2.3 4.4 0 1.5.6 2.9 1.5 3.9-.2 0-.4 0-.6-.1 0-2.8 2.2-5 4.9-5 .4 0 .7 0 1.1.1-1.3-.8-2.8-1.3-4.4-1.3-2.9 0-5.3 2.4-5.3 5.3 0 1.5.6 2.9 1.5 3.9-.9-.4-1.9-.7-3-.7z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19c-2.759 0-5-2.241-5-5 0-2.759 2.241-5 5-5 2.759 0 5 2.241 5 5 0-.3 0-.6-.1-.9-.9-.8-1.9-.7-3 .7-3.1 0-5.6-2.5-5.6-5.6 0-.4 0-.7.1-.9 2.51.7 4.87 2.8 4.87 5.3 0 1.5.6 2.9 1.5 3.9-.2 0-.4 0-.6-.1 0-2.8 2.2-5 4.9-5 .4 0 .7 0 1.1.1-1.3-.8-2.8-1.3-4.4-1.3-2.9 0-5.3 2.4-5.3 5.3 0 1.5.6 2.9 1.5 3.9-.9-.4-1.9-.7-3-.7z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 Tech Talent Trainers. All rights reserved.</p>
        </div>
      </div>
    </footer>
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