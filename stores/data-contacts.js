import { defineStore } from "pinia";
export const DataContact = defineStore("data-contact", {
  state: () => ({
    contentContacts: [],
    socialNetworks: [],
    messengers: [],
    phoneNumbers: [],
    emails: [],
  }),
  actions: {
    async getContacts() {
      try {
        const responseContacts = await $fetch(
          "https://strapi.lymos.ru/api/contacts-contents",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        this.contentContacts = responseContacts.data;
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
