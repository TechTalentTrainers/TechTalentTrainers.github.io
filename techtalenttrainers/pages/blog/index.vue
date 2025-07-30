<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/blog/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const posts = [
  { id: 1, title: 'First Blog Post' },
  { id: 2, title: 'Second Blog Post' },
  // Add more posts as needed
];
</script>
