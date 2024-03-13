<script setup>
import { DataPortfolio } from "~/stores/data-portfolio.js";
const dataPortfolio = DataPortfolio();

const response = await $fetch(
  "https://strapi.lymos.ru/api/portfolios?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataPortfolio.getPortfolio(response);
</script>

<template>
  <NuxtLink
    :to="`/portfolio/${portfolioExample.attributes.url}`"
    class="portfolio_example"
    v-for="portfolioExample in dataPortfolio.filter"
    :key="portfolioExample.attributes.id"
  >
    <div class="portfolio_example_header">
      <img :src="portfolioExample.attributes.img" alt="Portfolio" />
      <div class="link_prod">
        <TheIconCard />
      </div>
    </div>
    <div class="portfolio_example_footer">
      <h6>{{ portfolioExample.attributes.title }}</h6>
      <p>{{ portfolioExample.attributes.categories }}</p>
    </div>
  </NuxtLink>
</template>
