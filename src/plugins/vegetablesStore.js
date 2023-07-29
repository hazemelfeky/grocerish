import { defineStore } from "pinia";

export default defineStore("vegetables", {
  state: () => ({
    allProducts: [],
    offersProducts: [],
    singleProduct: {},
  }),
  getters: {
    categoriesProducts() {
      const obj = {};
      for (const product of this.allProducts) {
        if (obj[product.family] >= 1) obj[product.family]++;
        else obj[product.family] = 1;
      }
      return obj;
    },
  },
  actions: {
    getRandomProducts(numberOfProducts) {
      const min = 0;
      const max = this.allProducts.length - numberOfProducts;
      const randomPosition = Math.floor(Math.random() * (max - min)) + min;
      return this.allProducts.slice(
        randomPosition,
        randomPosition + numberOfProducts
      );
    },
  },
});
