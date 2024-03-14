import { defineStore } from "pinia";
export const DataHeaderFooter = defineStore("data-headerFooter", {
  state: () => ({
    copyrightP: "",
    a_href_tel: "",
    a_tel: "",
    a_href_mail: "",

    a_orderProject: "",

    menuButtonP: "",
    activeFieldZone: "",
    socials: [],
    navigations: [],
    headerMenues: [],
    contact: "",
    navigation: "",
    socialNetworks: [],
    messengers: [],
  }),

  actions: {
    getHeaderFooter(response, respSocials, respNavigation) {
      this.headerMenues = [];
      this.messengers = [];
      this.socialNetworks = [];
      let tmp = response.data;
      this.copyrightP = tmp.attributes.copyright_p;
      this.a_href_tel = tmp.attributes.a_href_tel;
      this.a_tel = tmp.attributes.a_tel;
      this.a_href_mail = tmp.attributes.a_href_mail;

      this.a_orderProject = tmp.attributes.a_orderProject;

      this.activeFieldZone = tmp.attributes.activeFieldZone;
      this.contact = tmp.attributes.contacts;
      this.navigation = tmp.attributes.navigations;
      this.menuButtonP = tmp.attributes.menuButtonP;

      this.socials = respSocials.data;
      this.messengers.push(respSocials.data[1], respSocials.data[2]);
      this.socialNetworks.push(respSocials.data[0], respSocials.data[3]);

      this.navigations = respNavigation.data;
      this.headerMenues.push(respNavigation.data[2], respNavigation.data[0]);
    },
  },
});
