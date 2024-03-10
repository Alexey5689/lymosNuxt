<script setup>
import { DataTitleDesc } from "~/stores/data-titleDesc.js";
import { DataPortfolio } from "~/stores/data-portfolio.js";

const dataPortfolio = DataPortfolio();
const titleDesc = DataTitleDesc();

const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/3",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

titleDesc.getTitleDesc(titleResponse);

useHead({
  title: () => titleDesc.titleDesc.title,
  meta: [
    {
      name: "description",
      content: () => titleDesc.titleDesc.description,
    },
  ],
});

const respPortfolioPage = await $fetch(
  "https://strapi.lymos.ru/api/portfolio-pages/1",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataPortfolio.getPortfolioH1(respPortfolioPage);
</script>
<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.checkScreenWidth();
    if (process.client) {
      window.addEventListener("resize", this.checkScreenWidth);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener("resize", this.checkScreenWidth);
    }
  },
  methods: {
    checkScreenWidth() {
      if (process.client) {
        this.isMobile = window.innerWidth <= 530;
      }
    },
  },
};
</script>
<template>
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content portfolio">
        <h1 class="title_portfolio">{{ dataPortfolio.portfolioTitleH1 }}</h1>
        <div class="nav_category">
          <ul>
            <TheSwiperCategory v-if="isMobile" />
            <ThePorUl v-else />
          </ul>
        </div>
        <div class="portfolio_box">
          <ThePorPortfolio />
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>
