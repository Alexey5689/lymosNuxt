import { defineStore } from "pinia";
export const DataThanksForm = defineStore("data-thanksForm", {
  state: () => ({
    thanksH4: "",
    thanksP: "",
    services_to: "",
    services: "",
    portfolio_to: "",
    portfolio: "",
  }),
  actions: {
    getThanksForm(response) {
      let tmp = response.data;
      this.thanksH4 = tmp.attributes.thanksH4;
      this.thanksP = tmp.attributes.thanksP;
      this.services_to = tmp.attributes.services_to;
      this.services = tmp.attributes.services;
      this.portfolio_to = tmp.attributes.portfolio_to;
      this.portfolio = tmp.attributes.portfolio;
    },
  },
});
