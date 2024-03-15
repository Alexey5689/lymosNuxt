<template>
  <div class="type_expertise">
    <div class="type_expertise_header">
      <h5>{{ expertise.cart1.header }}</h5>
      <div class="type_expertise_description">
        <div class="description_1">
          <h6>{{ expertise.getCart1.attributes.header }}</h6>
          <p>{{ expertise.getCart1.attributes.body }}</p>
        </div>
      </div>
    </div>
    <div class="type_expertise_footer">
      <ul v-if="width > 1023">
        <li
          v-for="(switcher, index) in expertise.cart1.switchers"
          :key="switcher.id"
          @mouseenter="expertise.changeCart1(index)"
          :class="{ expertise_active: index === expertise.pageCart1 }"
        >
          <p>{{ switcher.attributes.body }}</p>
        </li>
      </ul>
      <ul v-else>
        <li
          v-for="(switcher, index) in expertise.cart1.switchers"
          :key="switcher.id"
          @click="expertise.changeCart1(index)"
          :class="{ expertise_active: index === expertise.pageCart1 }"
        >
          <p>{{ switcher.attributes.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { DataExpertise } from "~/stores/data-expertise.js";
const expertise = DataExpertise();
</script>
<script>
export default {
  data() {
    return {
      width: 0,
    };
  },
  methods: {
    handleResize() {
      if (process.client) {
        this.width = window.innerWidth;
      }
    },
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.handleResize);
    }

    this.handleResize();
  },
};
</script>
