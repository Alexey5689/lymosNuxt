import { defineStore } from "pinia";

export const DataTitleDesc = defineStore("data-titleDesc", {
  state: () => ({
    // homeTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // premPipeTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // portfolioTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // mvpTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // modTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // iiTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // devTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // contactTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // servTitleDecs: {
    //   title: "",
    //   description: "",
    // },
    titleDesc: {
      title: "",
      description: "",
    },
  }),
  actions: {
    getTitleDesc(data) {
      this.titleDesc.title = data.data.attributes.title;
      this.titleDesc.description = data.data.attributes.description;
    },
  },
});
