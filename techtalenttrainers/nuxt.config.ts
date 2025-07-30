import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Tech Talent Trainers Website",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Enhance your tech skills with Tech Talent Trainers. Join our expert-led courses and workshops designed to empower aspiring developers, data scientists, and IT professionals. Start your journey to becoming a tech expert today!",
        },
        { charset: "utf-8" },
        { name: "author", content: "Tech Talent Trainers" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      // You can also define style and script tags here globally
      // style: [{ children: 'body { font-family: sans-serif; }' }],
      // script: [{ src: 'https://example.com/analytics.js', async: true }],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["../assets/styles/app.css", "../assets/styles/base.scss"],
  vite: {
    plugins: [tsconfigPaths(), tailwindcss()],
  },
  modules: [
    // "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
  ],
  image: {},
  future: {
    compatibilityVersion: 4.0,
  },
});
