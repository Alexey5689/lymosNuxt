import { defineStore } from "pinia";

export const DataExpertise = defineStore("data-expertise", {
  state: () => ({
    cart1: {
      id: 0,
      header: "",
      body: [],
      switchers: [],
    },
    pageCart1: 0,
    cart2: {
      id: 0,
      header: "",
      body: [],
      switchers: [],
    },
    pageCart2: 0,
    cart3: {
      id: 0,
      header: "",
      body: [],
      switchers: [],
    },
    pageCart3: 0,
    cart4: {
      id: 0,
      header: "",
      body: [],
      switchers: [],
    },
    pageCart4: 0,
  }),
  getters: {
    getCart1() {
      return this.cart1.body[this.pageCart1];
    },
    getCart2() {
      return this.cart2.body[this.pageCart2];
    },
    getCart3() {
      return this.cart3.body[this.pageCart3];
    },
    getCart4() {
      return this.cart4.body[this.pageCart4];
    },
  },
  actions: {
    cart(responseCart1, responseCart2, responseCart3, responseCart4) {
      this.cart1.header = responseCart1.data.attributes.header;
      this.cart1.id = responseCart1.data.attributes.number;
      this.cart1.body = responseCart1.data.attributes.cart_bodies.data;
      this.cart1.switchers = responseCart1.data.attributes.cart_switchers.data;

      this.cart2.header = responseCart2.data.attributes.header;
      this.cart2.id = responseCart2.data.attributes.number;
      this.cart2.body = responseCart2.data.attributes.cart_bodies.data;
      this.cart2.switchers = responseCart2.data.attributes.cart_switchers.data;

      this.cart3.header = responseCart3.data.attributes.header;
      this.cart3.id = responseCart3.data.attributes.number;
      this.cart3.body = responseCart3.data.attributes.cart_bodies.data;
      this.cart3.switchers = responseCart3.data.attributes.cart_switchers.data;

      this.cart4.header = responseCart4.data.attributes.header;
      this.cart4.id = responseCart4.data.attributes.number;
      this.cart4.body = responseCart4.data.attributes.cart_bodies.data;
      this.cart4.switchers = responseCart4.data.attributes.cart_switchers.data;
    },
    changeCart1(i) {
      this.pageCart1 = i;
    },
    changeCart2(k) {
      this.pageCart2 = k;
    },
    changeCart3(j) {
      this.pageCart3 = j;
    },
    changeCart4(l) {
      this.pageCart4 = l;
    },
  },
});
