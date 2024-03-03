import { defineStore } from "pinia";

export const DataPremiumPipe = defineStore("data-premium-pipe", {
  state: () => ({
    concepts: [],
    aboutProjects: [],
    swapIcons: [],
    technologyLogos: [],
    weUseH2: "",
    designSystems: [],
    contentPremiumPipeUl: [],
    premiumPipeH1: "",
  }),
  getters: {
    getSwapIcons() {
      return this.swapIcons;
    },
    getTechLogo() {
      return this.technologyLogos;
    },
    getWeUse() {
      return this.weUseH2;
    },
    getDesineSystem() {
      return this.designSystems;
    },
    getContentPremiumPipe() {
      return this.premiumPipeH1;
    },
    getContentPremiumPipeUl() {
      return this.contentPremiumPipeUl;
    },
  },
  actions: {
    async getPermPipeAbout() {
      try {
        const response = await $fetch({
          url: "https://strapi.lymos.ru/api/premium-pipe-abouts",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.aboutProjects = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getPermPipeConcepts() {
      try {
        const response = await $fetch({
          url: "https://strapi.lymos.ru/api/premium-pipe-concepts",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.concepts = response.data.data;
        console.log(response);
      } catch (err) {}
    },
    async getPermiumPipe() {
      try {
        const respSwapIcons = await $fetch(
          "https://strapi.lymos.ru/api/swap-icons",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.swapIcons = respSwapIcons.data;
        const respTechnologyLogos = await $fetch(
          "https://strapi.lymos.ru/api/technologies",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.technologyLogos = respTechnologyLogos.data;
        const responseWeUse = await $fetch(
          "https://strapi.lymos.ru/api/we-uses/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        let tmpWeUse = responseWeUse.data;
        this.weUseH2 = tmpWeUse.attributes.h2;
        const responseDesignSystems = await $fetch(
          "https://strapi.lymos.ru/api/design-systems",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.designSystems = responseDesignSystems.data;
        const respContentPremiumPipe = await $fetch(
          "https://strapi.lymos.ru/api/content-premium-pipes/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        let tmpPpcontent = respContentPremiumPipe.data;
        this.premiumPipeH1 = tmpPpcontent.attributes.h1;
        const responseContentPremiumPipeUl = await $fetch(
          "https://strapi.lymos.ru/api/content-premium-pipe-uls",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.contentPremiumPipeUl = responseContentPremiumPipeUl.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
