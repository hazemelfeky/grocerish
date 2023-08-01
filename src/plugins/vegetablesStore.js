import { defineStore } from "pinia";

export default defineStore("vegetables", {
  state: () => ({
    allProducts: [],
    offersProducts: [],
    singleProduct: {},
  }),
  getters: {
    categoriesProducts() {
      const obj = this.allProducts.reduce((acc, product) => {
        const { family } = product;
        if (!acc[family]) {
          acc[family] = [];
        }
        acc[family].push(product);
        return acc;
      }, {});
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
