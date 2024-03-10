<script setup>
import { DataTitleDesc } from "~/stores/data-titleDesc.js";
import { DataPremiumPipe } from "~/stores/data-premium-pipe.js";

const dataPremiumPipe = DataPremiumPipe();
const titleDesc = DataTitleDesc();

const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/2",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

useHead({
  title: () => titleDesc.titleDesc.title,
  meta: [
    {
      name: "description",
      content: () => titleDesc.titleDesc.description,
    },
  ],
});
titleDesc.getTitleDesc(titleResponse);

const respSwapIcons = await $fetch("https://strapi.lymos.ru/api/swap-icons", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const respTechnologyLogos = await $fetch(
  "https://strapi.lymos.ru/api/technologies",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const responseContentPremiumPipeUl = await $fetch(
  "https://strapi.lymos.ru/api/content-premium-pipe-uls",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const responseDesignSystems = await $fetch(
  "https://strapi.lymos.ru/api/design-systems",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const respContentPremiumPipe = await $fetch(
  "https://strapi.lymos.ru/api/content-premium-pipes/1",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const responseWeUse = await $fetch("https://strapi.lymos.ru/api/we-uses/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

dataPremiumPipe.getPermiumPipe(
  respSwapIcons,
  respTechnologyLogos,
  responseWeUse,
  responseDesignSystems,
  respContentPremiumPipe,
  responseContentPremiumPipeUl
);
</script>
<template>
  <main>
    <div class="swap_icons">
      <img
        v-for="swapIcon in dataPremiumPipe.swapIcons"
        :key="swapIcon.id"
        :src="swapIcon.attributes.swapIcon"
        :alt="swapIcon.attributes.swapAlt"
      />
    </div>

    <div class="wrapper">
      <div class="content premium_pipe">
        <h1>{{ dataPremiumPipe.premiumPipeH1 }}</h1>
        <ul>
          <li
            v-for="contentPremiumPipeUl in dataPremiumPipe.contentPremiumPipeUls"
            :key="contentPremiumPipeUl.id"
          >
            {{ contentPremiumPipeUl.attributes.li }}
          </li>
        </ul>

        <TheAboutProject />

        <TheConcept />

        <section class="we_used">
          <h2>{{ dataPremiumPipe.weUseH2 }}</h2>
          <div class="technology_logos">
            <img
              v-for="technologyLogo in dataPremiumPipe.technologyLogos"
              :key="technologyLogo.id"
              :src="technologyLogo.attributes.techLogo"
              :alt="technologyLogo.attributes.techAlt"
            />
          </div>
        </section>
      </div>
    </div>

    <section
      v-for="designSystem in dataPremiumPipe.designSystems"
      :key="designSystem.id"
      class="design_system"
    >
      <h2>{{ designSystem.attributes.h2 }}</h2>
      <p>
        {{ designSystem.attributes.p }}
      </p>

      <img
        :src="designSystem.attributes.fotoConcept2Img"
        :alt="designSystem.attributes.fotoConcept2Alt"
      />
    </section>
  </main>
  <TheFooter />
</template>
