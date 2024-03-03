import { defineStore } from "pinia";
export const DataHome = defineStore("data-home", {
  state: () => ({
    introH1Span: "",
    introH1: "",
    introH4: "",
    servicesH4: "",
    servicesRouterLink: "",
    servicesP: "",
    benefitsH2: "",
    benefitsSpan: "",
    aboutH4: "",
    benefitsh4: {},
    aboutPs: {},
    aboutBlockP1: "",
    aboutBlockSpan1: "",
    aboutBlockP2: "",
    aboutBlockSpan2: "",
    aboutBlockP3: "",
    aboutBlockSpan3: "",
  }),
  getters: {},
  actions: {
    async getHomePage() {
      try {
        const response = await $fetch(
          "https://strapi.lymos.ru/api/home-views/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        let tmp = response.data;
        this.introH1Span = tmp.attributes.introH1Span;
        this.introH1 = tmp.attributes.introH1;
        this.introH4 = tmp.attributes.introH4;
        this.servicesH4 = tmp.attributes.servicesH4;
        this.servicesRouterLink = tmp.attributes.servicesRouterLink;
        this.servicesP = tmp.attributes.servicesP;
        this.benefitsH2 = tmp.attributes.benefitsH2;
        this.benefitsSpan = tmp.attributes.benefitsSpan;
        this.aboutH4 = tmp.attributes.aboutH4;
        const respBenefits = await $fetch(
          "https://strapi.lymos.ru/api/home-view-benefits-h4s",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.benefitsh4 = respBenefits.data;
        const respAbout = await $fetch(
          "https://strapi.lymos.ru/api/home-view-about-ps",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.aboutPs = respAbout.data;
        const respAboutBlock = await $fetch(
          "https://strapi.lymos.ru/api/home-view-about-block-ps",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        let tmpAboutBlock1 = respAboutBlock.data[0];
        let tmpAboutBlock2 = respAboutBlock.data[1];
        let tmpAboutBlock3 = respAboutBlock.data[2];
        this.aboutBlockPs = respAboutBlock.data;
        this.aboutBlockP1 = tmpAboutBlock1.attributes.p;
        this.aboutBlockSpan1 = tmpAboutBlock1.attributes.span;
        this.aboutBlockP2 = tmpAboutBlock2.attributes.p;
        this.aboutBlockSpan2 = tmpAboutBlock2.attributes.span;
        this.aboutBlockP3 = tmpAboutBlock3.attributes.p;
        this.aboutBlockSpan3 = tmpAboutBlock3.attributes.span;
      } catch (err) {}
    },
  },
});
