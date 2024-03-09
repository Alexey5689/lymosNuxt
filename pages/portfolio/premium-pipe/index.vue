<script setup>
const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/2",
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
const respSwapIcons = await $fetch("https://strapi.lymos.ru/api/swap-icons", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
const swapIcons = respSwapIcons.data;

const respTechnologyLogos = await $fetch(
  "https://strapi.lymos.ru/api/technologies",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const technologyLogos = respTechnologyLogos.data;

const responseContentPremiumPipeUl = await $fetch(
  "https://strapi.lymos.ru/api/content-premium-pipe-uls",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const contentPremiumPipeUls = responseContentPremiumPipeUl.data;

const responseDesignSystems = await $fetch(
  "https://strapi.lymos.ru/api/design-systems",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const designSystems = responseDesignSystems.data;

const respContentPremiumPipe = await $fetch(
  "https://strapi.lymos.ru/api/content-premium-pipes/1",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
let tmpPpcontent = respContentPremiumPipe.data;
const premiumPipeH1 = tmpPpcontent.attributes.h1;

const responseWeUse = await $fetch("https://strapi.lymos.ru/api/we-uses/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
let tmpWeUse = responseWeUse.data;
const weUseH2 = tmpWeUse.attributes.h2;

// const swapIcons = [];
// const technologyLogos = [];
// const weUseH2 = "";
// const designSystems = [];
// const contentPremiumPipeUls = [];
// const premiumPipeH1 = "";
</script>
<template>
  <main>
    <div class="swap_icons">
      <img
        v-for="swapIcon in swapIcons"
        :key="swapIcon.id"
        :src="swapIcon.attributes.swapIcon"
        :alt="swapIcon.attributes.swapAlt"
      />
    </div>

    <div class="wrapper">
      <div class="content premium_pipe">
        <h1>{{ premiumPipeH1 }}</h1>
        <ul>
          <li
            v-for="contentPremiumPipeUl in contentPremiumPipeUls"
            :key="contentPremiumPipeUl.id"
          >
            {{ contentPremiumPipeUl.attributes.li }}
          </li>
        </ul>

        <TheAboutProject />

        <TheConcept />

        <section class="we_used">
          <h2>{{ weUseH2 }}</h2>
          <div class="technology_logos">
            <img
              v-for="technologyLogo in technologyLogos"
              :key="technologyLogo.id"
              :src="technologyLogo.attributes.techLogo"
              :alt="technologyLogo.attributes.techAlt"
            />
          </div>
        </section>
      </div>
    </div>

    <section
      v-for="designSystem in designSystems"
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
