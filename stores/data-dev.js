import { defineStore } from "pinia";

export const DataDev = defineStore("data-dev", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
    pageTitle: [],
    spotsFores: [],
    devViews: [],
  }),
  actions: {
    async getDevData() {
      try {
        const respArcHeaders = await $fetch(
          "https://strapi.lymos.ru/api/dev-arc-headers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.arcHeaders = respArcHeaders.data;
        const respStepsDev = await $fetch(
          "https://strapi.lymos.ru/api/dev-steps-devs",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.stepsDev = respStepsDev.data;
        const respArcFooters = await $fetch(
          "https://strapi.lymos.ru/api/dev-arc-footers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.arcFooters = respArcFooters.data;
        const respPageTitle = await $fetch(
          "https://strapi.lymos.ru/api/dev-page-titles",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.pageTitle = respPageTitle.data;
        const respSpotsFores = await $fetch(
          "https://strapi.lymos.ru/api/dev-spots-fores",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.spotsFores = respSpotsFores.data;
        const respDevViews = await $fetch(
          "https://strapi.lymos.ru/api/dev-views",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.devViews = respDevViews.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
