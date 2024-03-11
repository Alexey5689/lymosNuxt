import { defineStore } from "pinia";
export const DataContact = defineStore("data-contact", {
  state: () => ({
    title_contacts_h1: "",
    title_contacts_h3: "",
    iframe: "",
    social_network_h4: "",
    messengers_h4: "",
    phone_number_h4: "",
    email_h4: "",
  }),
  actions: {
    getContacts(respContacts) {
      let tmpCont = respContacts.data;
      this.title_contacts_h1 = tmpCont.attributes.h1;
      this.title_contacts_h3 = tmpCont.attributes.h3;
      this.iframe = tmpCont.attributes.iframe;
      this.social_network_h4 = tmpCont.attributes.social_h4;
      this.messengers_h4 = tmpCont.attributes.messengers_h4;
      this.phone_number_h4 = tmpCont.attributes.phone_h4;
      this.email_h4 = tmpCont.attributes.email_h4;
    },
  },
});
