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
      responseWeUse,
      responseDesignSystems,
      respContentPremiumPipe,
      responseContentPremiumPipeUl
    ) {
      this.swapIcons = respSwapIcons.data;
      this.technologyLogos = respTechnologyLogos.data;

      let tmpWeUse = responseWeUse.data;
      this.weUseH2 = tmpWeUse.attributes.h2;

      this.designSystems = responseDesignSystems.data;

      let tmpPpcontent = respContentPremiumPipe.data;
      this.premiumPipeH1 = tmpPpcontent.attributes.h1;

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
