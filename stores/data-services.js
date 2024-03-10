import { defineStore } from "pinia";

export const DataServices = defineStore("data-services", {
  state: () => ({
    applicationServs: [],
    servicesViewH1: "",
    servicesViewH4: "",
  }),
  getters: {},
  actions: {
    getServices(respServicesView) {
      let tmp = respServicesView.data;
      this.servicesViewH1 = tmp.attributes.h1;
      this.servicesViewH4 = tmp.attributes.h4;
    },
    getSerApplication(response) {
      this.applicationServs = response.data;
    },
  },
});
