import { defineStore } from "pinia";

export const DataForm = defineStore("data-form", {
  state: () => ({
    description: "",
    meetTitle: "",
    sevicesTitle: "",
    buttonNext: "",
    buttonBack: "",
    buttonSend: "",
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
      } catch (err) {
        console.log(err);
      }
    },
  },
});
