<script setup>
import { DataPortfolio } from "~/stores/data-portfolio.js";

const dataPortfolio = DataPortfolio();

onMounted(() => {
  dataPortfolio.getPortfolio();
});

const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/3",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const title = titleResponse.data.attributes.title;
const description = titleResponse.data.attributes.description;
useHead({
  title: () => title,
  meta: [
    {
      name: "description",
      content: () => description,
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
const portfolioTitleH1 = respPortfolioPage.data.attributes.h1;
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
        <h1 class="title_portfolio">{{ portfolioTitleH1 }}</h1>
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
