import { defineStore } from "pinia";

export const DataMod = defineStore("data-mod", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
    pageTitle: [],
    spotsFores: [],
    modViews: [],
  }),
  actions: {
    async getModData() {
      try {
        const respArcHeaders = await $fetch(
          "https://strapi.lymos.ru/api/mod-arc-headers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.arcHeaders = respArcHeaders.data;
        const respStepsDev = await $fetch(
          "https://strapi.lymos.ru/api/mod-steps-devs",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.stepsDev = respStepsDev.data;
        const respArcFooters = await $fetch(
          "https://strapi.lymos.ru/api/mod-arc-footers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.arcFooters = respArcFooters.data;
        const respPageTitle = await $fetch(
          "https://strapi.lymos.ru/api/mod-page-titles",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.pageTitle = respPageTitle.data;
        const respSpotsFores = await $fetch(
          "https://strapi.lymos.ru/api/mod-spots-fores",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.spotsFores = respSpotsFores.data;
        const respModViews = await $fetch(
          "https://strapi.lymos.ru/api/mod-views",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.modViews = respModViews.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
