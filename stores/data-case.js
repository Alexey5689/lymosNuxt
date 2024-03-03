import { defineStore } from "pinia";
export const DataCase = defineStore("data-case", {
  state: () => ({
    devCases: [],
  }),
  actions: {
    async getDevCase() {
      try {
        const response = await $fetch("https://strapi.lymos.ru/api/dev-cases", {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.devCases = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
