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
    getDevData(
      respArcHeaders,
      respStepsDev,
      respArcFooters,
      respPageTitle,
      respSpotsFores,
      respDevViews
    ) {
      this.arcHeaders = respArcHeaders.data;
      this.stepsDev = respStepsDev.data;
      this.arcFooters = respArcFooters.data;
      this.pageTitle = respPageTitle.data;
      this.spotsFores = respSpotsFores.data;
      this.devViews = respDevViews.data;
    },
  },
});
