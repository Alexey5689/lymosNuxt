<script setup>
import { DataIi } from "~/stores/data-li";
import { DataTitleDesc } from "~/stores/data-titleDesc.js";

const titleDesc = DataTitleDesc();
const dataIi = DataIi();

const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/6",
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

const respArcHeaders = await $fetch(
  "https://strapi.lymos.ru/api/ii-arc-headers?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respStepsDev = await $fetch(
  "https://strapi.lymos.ru/api/ii-steps-devs?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const respArcFooters = await $fetch(
  "https://strapi.lymos.ru/api/ii-arc-footers?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respPageTitle = await $fetch(
  "https://strapi.lymos.ru/api/ii-page-titles?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const respSpotsFores = await $fetch(
  "https://strapi.lymos.ru/api/ii-spots-fores?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respIiViews = await $fetch(
  "https://strapi.lymos.ru/api/ii-views?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataIi.getIiData(
  respArcHeaders,
  respStepsDev,
  respArcFooters,
  respPageTitle,
  respSpotsFores,
  respIiViews
);
</script>
<template>
  <main class="ii">
    <ThePageTitle :pageTitles="dataIi.pageTitle" />
    <TheSpotsFore :pageSlogans="dataIi.spotsFores" />
    <div v-for="iiView in dataIi.iiViews" :key="iiView.id" class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">{{ iiView.attributes.h4 }}</h4>
        <ThePageSteps
          :arcHeaders="dataIi.arcHeaders"
          :stepsDev="dataIi.stepsDev"
          :arcFooters="dataIi.arcFooters"
        />
      </div>

      <div class="content">
        <div class="service_description">
          <h2>{{ iiView.attributes.h2 }}</h2>
          <p>
            {{ iiView.attributes.p }}
          </p>
        </div>
      </div>
    </div>
  </main>

  <TheFooter />
</template>
