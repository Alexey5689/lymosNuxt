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
    getModData(
      respArcHeaders,
      respStepsDev,
      respArcFooters,
      respPageTitle,
      respSpotsFores,
      respModViews
    ) {
      this.arcHeaders = respArcHeaders.data;
      this.stepsDev = respStepsDev.data;
      this.arcFooters = respArcFooters.data;
      this.pageTitle = respPageTitle.data;
      this.spotsFores = respSpotsFores.data;
      this.modViews = respModViews.data;
    },
  },
});
