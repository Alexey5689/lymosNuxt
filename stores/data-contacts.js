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
    socialNetworks: [],
    messengers: [],
    a_href_tel: "",
    a_tel: "",
    a_href_mail: "",
    a_mail: "",
  }),
  actions: {
    getContacts(respContacts, respSocials, response) {
      let tmpCont = respContacts.data;
      this.title_contacts_h1 = tmpCont.attributes.h1;
      this.title_contacts_h3 = tmpCont.attributes.h3;
      this.iframe = tmpCont.attributes.iframe;
      this.social_network_h4 = tmpCont.attributes.social_h4;
      this.messengers_h4 = tmpCont.attributes.messengers_h4;
      this.phone_number_h4 = tmpCont.attributes.phone_h4;
      this.email_h4 = tmpCont.attributes.email_h4;

      this.messengers = [];
      this.socialNetworks = [];
      let tmp = response.data;
      this.a_href_tel = tmp.attributes.a_href_tel;
      this.a_tel = tmp.attributes.a_tel;
      this.a_href_mail = tmp.attributes.a_href_mail;
      this.a_mail = tmp.attributes.a_mail;
      this.messengers.push(respSocials.data[1], respSocials.data[2]);
      this.socialNetworks.push(respSocials.data[0], respSocials.data[3]);
    },
  },
});
