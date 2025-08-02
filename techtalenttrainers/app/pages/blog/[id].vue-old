<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const posts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  // Add more posts as needed
];

const post = posts.find((p) => p.id === parseInt(route.params.id));
</script>
