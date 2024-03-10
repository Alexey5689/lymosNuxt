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
    getFormData(response, respFormServ) {
      let tmp = response.data;
      this.sevicesTitle = tmp.attributes.titleService;
      this.description = tmp.attributes.descriptionP;
      this.meetTitle = tmp.attributes.titleMeet;
      this.buttonBack = tmp.attributes.buttonMoveBack;
      this.buttonNext = tmp.attributes.buttonNextStep;
      this.buttonSend = tmp.attributes.buttonSend;

      this.formServs = respFormServ.data;
    },
  },
});
