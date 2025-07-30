<!-- layouts/default.vue -->
<template>
  <div>
    <header>
      <!-- Your header content here -->
      <h1>Welcome to Our Website</h1>
    </header>
    <main>
      <slot /> <!-- This is where your page content will be injected -->
    </main>
    <footer>
      <!-- Your footer content here -->
      <p>&copy; 2023 Our Company</p>
    </footer>
  </div>
</template>
