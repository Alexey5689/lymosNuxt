<script setup>
import { DataMod } from "~/stores/data-modification";
import { DataTitleDesc } from "~/stores/data-titleDesc.js";

const titleDesc = DataTitleDesc();
const dataMod = DataMod();

const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/5",
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
  "https://strapi.lymos.ru/api/mod-arc-headers?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const respStepsDev = await $fetch(
  "https://strapi.lymos.ru/api/mod-steps-devs?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respArcFooters = await $fetch(
  "https://strapi.lymos.ru/api/mod-arc-footers?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respPageTitle = await $fetch(
  "https://strapi.lymos.ru/api/mod-page-titles?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respSpotsFores = await $fetch(
  "https://strapi.lymos.ru/api/mod-spots-fores?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respModViews = await $fetch(
  "https://strapi.lymos.ru/api/mod-views?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataMod.getModData(
  respArcHeaders,
  respStepsDev,
  respArcFooters,
  respPageTitle,
  respSpotsFores,
  respModViews
);
</script>
<template>
  <main class="modification">
    <ThePageTitle :pageTitles="dataMod.pageTitle" />
    <TheSpotsFore :pageSlogans="dataMod.spotsFores" />
    <div v-for="modView in dataMod.modViews" :key="modView.id" class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">{{ modView.attributes.h4 }}</h4>
        <ThePageSteps
          :arcHeaders="dataMod.arcHeaders"
          :stepsDev="dataMod.stepsDev"
          :arcFooters="dataMod.arcFooters"
        />
      </div>

      <div class="content">
        <div class="service_description">
          <h2>{{ modView.attributes.h2 }}</h2>
          <p>
            {{ modView.attributes.p }}
          </p>
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>
