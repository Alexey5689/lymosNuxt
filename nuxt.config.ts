import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true, vscode: {} },
  alias: { "@": resolve(__dirname, "/") },
  app: {
    head: {
      meta: [
        {
          charset: "UTF-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  css: ["~/assets/style.css"],
  modules: ["@pinia/nuxt", "nuxt-swiper"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
