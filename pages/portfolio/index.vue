<script setup>
import { DataPortfolio } from "~/stores/data-portfolio.js";
import { DataTitleDesc } from "~/stores/data-titleDesc.js";

const titleDesc = DataTitleDesc();
const dataPortfolio = DataPortfolio();

onMounted(() => {
  dataPortfolio.getPortfolio();
  titleDesc.getPortfolioTitDecs();
});

// useHead({
//   title: () => titleDesc.portfolioTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.portfolioTitleDesc.description,
//     },
//   ],
// });
useHead({
  title: () => titleDesc.titleDesc.title,
  meta: [
    {
      name: "description",
      content: () => titleDesc.titleDesc.description,
    },
  ],
});
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
        <h1 class="title_portfolio">{{ dataPortfolio.getPageTitle }}</h1>
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
