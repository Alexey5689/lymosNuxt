import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true, vscode: {} },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/style.css"],
  modules: ["@pinia/nuxt", "nuxt-swiper"],
  pinia: {
    storesDirs: ["stores"],
  },
});
