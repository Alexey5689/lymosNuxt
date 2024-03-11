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
    myName: "",
    fromCompany: "",
    myPhone: "",
    myEmail: "",
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

      this.myName = tmp.attributes.myName;
      this.fromCompany = tmp.attributes.fromCompany;
      this.myPhone = tmp.attributes.myPhone;
      this.myEmail = tmp.attributes.myEmail;
    },
  },
});
