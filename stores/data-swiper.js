import { defineStore } from "pinia";

export const DataSwiper = defineStore("data-swiper", {
  state: () => ({
    swiperData: [],
  }),
  actions: {
    getSwiper(response) {
      this.swiperData = response.data;
    },
  },
});
