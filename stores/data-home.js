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
    getHomePage(homeResponse, respBenefits, respAbout, respAboutBlock) {
      let tmp = homeResponse.data;
      this.introH1Span = tmp.attributes.introH1Span;
      this.introH1 = tmp.attributes.introH1;
      this.introH4 = tmp.attributes.introH4;
      this.servicesH4 = tmp.attributes.servicesH4;
      this.servicesRouterLink = tmp.attributes.servicesRouterLink;
      this.servicesP = tmp.attributes.servicesP;
      this.benefitsH2 = tmp.attributes.benefitsH2;
      this.benefitsSpan = tmp.attributes.benefitsSpan;
      this.aboutH4 = tmp.attributes.aboutH4;

      this.benefitsh4 = respBenefits.data;

      this.aboutPs = respAbout.data;

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
    },
  },
});
