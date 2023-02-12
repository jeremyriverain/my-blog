export default defineNuxtConfig({
  extends: "@nuxt-themes/alpine",
  modules: ["@formkit/nuxt"],
  css: [
    '@/assets/css/main.css',
    'nprogress/nprogress.css',
  ]
});
