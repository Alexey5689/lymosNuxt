import { defineStore } from "pinia";
export const DataContact = defineStore("data-contact", {
  state: () => ({
    contentContacts: [],
    socialNetworks: [],
    messengers: [],
    phoneNumbers: [],
    emails: [],
    title_contacts_h1: "",
    title_contacts_h3: "",
    iframe: "",
    social_network_h4: "",
    messengers_h4: "",
    phone_number_h4: "",
    email_h4: "",
  }),
  actions: {
    async getContacts() {
      try {
        const responseContacts = await $fetch(
          "https://strapi.lymos.ru/api/contacts/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        let tmp = responseContacts.data;
        this.title_contacts_h1 = tmp.attributes.h1;
        this.title_contacts_h3 = tmp.attributes.h3;
        this.iframe = tmp.attributes.iframe;
        this.social_network_h4 = tmp.attributes.social_h4;
        this.messengers_h4 = tmp.attributes.messengers_h4;
        this.phone_number_h4 = tmp.attributes.phone_h4;
        this.email_h4 = tmp.attributes.email_h4;
        const responSocialNetworks = await $fetch(
          "https://strapi.lymos.ru/api/social-networks",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        this.socialNetworks = responSocialNetworks.data;
        const responMessengers = await $fetch(
          "https://strapi.lymos.ru/api/messengers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        this.messengers = responMessengers.data;
        const responPhoneNumbers = await $fetch(
          "https://strapi.lymos.ru/api/phone-numbers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        this.phoneNumbers = responPhoneNumbers.data;
        const responEmails = await $fetch(
          "https://strapi.lymos.ru/api/contact-emails",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        this.emails = responEmails.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
