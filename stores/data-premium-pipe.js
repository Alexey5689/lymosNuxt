import { defineStore } from "pinia";

export const DataPremiumPipe = defineStore("data-premium-pipe", {
  state: () => ({
    concepts: [],
    aboutProjects: [],
    swapIcons: [],
    technologyLogos: [],
    weUseH2: "",
    designSystems: [],
    contentPremiumPipeUls: [],
    premiumPipeH1: "",
  }),
  getters: {},
  actions: {
    getPermiumPipe(
      respSwapIcons,
      respTechnologyLogos,
      responseDesignSystems,
      respContentPremiumPipe,
      responseContentPremiumPipeUl
    ) {
      this.swapIcons = respSwapIcons.data;
      this.technologyLogos = respTechnologyLogos.data;

      this.designSystems = responseDesignSystems.data;

      let tmpPpcontent = respContentPremiumPipe.data;
      this.premiumPipeH1 = tmpPpcontent.attributes.h1;
      this.weUseH2 = tmpPpcontent.attributes.h2;

      this.contentPremiumPipeUls = responseContentPremiumPipeUl.data;
    },
    getPermPipeAbout(response) {
      this.aboutProjects = response.data;
    },
    getPermPipeConcepts(response) {
      this.concepts = response.data;
    },
  },
});
