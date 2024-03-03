import { defineStore } from "pinia";

export const DataSwiper = defineStore("data-swiper", {
  state: () => ({
    swiperData: [],
  }),
  actions: {
    async getSwiper() {
      try {
        const response = await $fetch(
          "https://strapi.lymos.ru/api/swipers?sort=id",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        this.swiperData = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
