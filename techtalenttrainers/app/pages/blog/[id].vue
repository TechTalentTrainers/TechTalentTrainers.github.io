<template>
  <div v-if="pending">Loading post...</div>

  <div v-else-if="error">An error occurred: {{ error.message }}</div>
  <div v-else-if="post" class="min-h-screen overflow-x-hidden bg-white">
    <!-- Blog Post Content -->
    <section class="container px-6 py-24 mx-auto">
      <article class="max-w-4xl mx-auto">
        <header class="mb-12 text-center">
          <h1 class="mb-4 text-4xl font-bold text-gray-900">
            {{ post.title }}
          </h1>
          <div class="flex justify-center mb-8 space-x-4">
            <span class="text-gray-500">{{ formatDate(post.date) }}</span>
            <span
              class="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full"
              >{{ post.category }}</span
            >
          </div>
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-64 object-cover rounded-lg"
          />
        </header>
        <div class="prose lg:prose-xl mx-auto" v-html="post.content"></div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { useRoute, useAsyncData } from "#app";

const { params } = useRoute();

const {
  data: post,
  pending,
  error,
} = await useAsyncData("blog-post", () => {
  // Your data fetching logic would go here, for example:
  // const { year, month, date, slug } = params;
  // const path = `/blog/${year}/${month}/${date}/${slug}`;
  // return $content(path).fetch();

  // We'll use your placeholder data for demonstration.
  return {
    category: "fun",
    title: "The Wind in The Willows",
    date: "1999-06-07",
    content: "Lorem ipsum dolor sit amet",
    image: "",
  };
});

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
</script>

<style>
.prose img {
  max-width: 100%;
  height: auto;
}
</style>
