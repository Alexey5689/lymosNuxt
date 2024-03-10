import { defineStore } from "pinia";
export const DataCase = defineStore("data-case", {
  state: () => ({
    devCases: [],
  }),
  actions: {
    getDevCase(response) {
      this.devCases = response.data;
    },
  },
});
