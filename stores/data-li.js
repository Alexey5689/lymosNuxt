import { defineStore } from "pinia";

export const DataIi = defineStore("data-li", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
    pageTitle: [],
    spotsFores: [],
    iiViews: [],
  }),
  actions: {
    async getIiData() {
      try {
        const respArcHeaders = await $fetch(
          "https://strapi.lymos.ru/api/ii-arc-headers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.arcHeaders = respArcHeaders.data;
        const respStepsDev = await $fetch(
          "https://strapi.lymos.ru/api/ii-steps-devs",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.stepsDev = respStepsDev.data;
        const respArcFooters = await $fetch(
          "https://strapi.lymos.ru/api/ii-arc-footers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.arcFooters = respArcFooters.data;
        const respPageTitle = await $fetch(
          "https://strapi.lymos.ru/api/ii-page-titles",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.pageTitle = respPageTitle.data;
        const respSpotsFores = await $fetch(
          "https://strapi.lymos.ru/api/ii-spots-fores",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.spotsFores = respSpotsFores.data;
        const respIiViews = await $fetch(
          "https://strapi.lymos.ru/api/ii-views",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.iiViews = respIiViews.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
