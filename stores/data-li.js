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
    getIiData(
      respArcHeaders,
      respStepsDev,
      respArcFooters,
      respPageTitle,
      respSpotsFores,
      respIiViews
    ) {
      this.arcHeaders = respArcHeaders.data;
      this.stepsDev = respStepsDev.data;
      this.arcFooters = respArcFooters.data;
      this.pageTitle = respPageTitle.data;
      this.spotsFores = respSpotsFores.data;
      this.iiViews = respIiViews.data;
    },
  },
});
