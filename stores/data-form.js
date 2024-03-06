import { defineStore } from "pinia";

export const DataForm = defineStore("data-form", {
  state: () => ({
    description: "",
    meetTitle: "",
    sevicesTitle: "",
    buttonNext: "",
    buttonBack: "",
    buttonSend: "",
    formServs: [],
  }),
  actions: {
    async getFormData() {
      try {
        const response = await $fetch("https://strapi.lymos.ru/api/forms/1", {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        let tmp = response.data;
        this.sevicesTitle = tmp.attributes.titleService;
        this.description = tmp.attributes.descriptionP;
        this.meetTitle = tmp.attributes.titleMeet;
        this.buttonBack = tmp.attributes.buttonMoveBack;
        this.buttonNext = tmp.attributes.buttonNextStep;
        this.buttonSend = tmp.attributes.buttonSend;
        const respFormServ = await $fetch(
          "https://strapi.lymos.ru/api/form-services",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.formServs = respFormServ.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
// /api/form-services
