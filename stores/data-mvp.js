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
    getMvpData(
      respArcHeaders,
      respStepsDev,
      respArcFooters,
      respPageTitle,
      respSpotsFores,
      respMvpViews
    ) {
      this.arcHeaders = respArcHeaders.data;
      this.stepsDev = respStepsDev.data;
      this.arcFooters = respArcFooters.data;
      this.pageTitle = respPageTitle.data;
      this.spotsFores = respSpotsFores.data;
      this.mvpViews = respMvpViews.data;
    },
  },
});
