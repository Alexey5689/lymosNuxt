import { defineStore } from "pinia";

export const DataMvp = defineStore("data-mvp", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
    pageTitle: [],
    spotsFores: [],
    mvpViews: [],
  }),
  actions: {
    async getMvpData() {
      try {
        const respArcHeaders = await $fetch(
          "https://strapi.lymos.ru/api/mvp-arc-headers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.arcHeaders = respArcHeaders.data;
        const respStepsDev = await $fetch(
          "https://strapi.lymos.ru/api/mvp-steps-devs",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.stepsDev = respStepsDev.data;
        const respArcFooters = await $fetch(
          "https://strapi.lymos.ru/api/mvp-arc-footers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.arcFooters = respArcFooters.data;
        const respPageTitle = await $fetch(
          "https://strapi.lymos.ru/api/mvp-page-titles",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.pageTitle = respPageTitle.data;
        const respSpotsFores = await $fetch(
          "https://strapi.lymos.ru/api/mvp-spots-fores",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.spotsFores = respSpotsFores.data;
        const respMvpViews = await $fetch(
          "https://strapi.lymos.ru/api/mvp-views",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.mvpViews = respMvpViews.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
