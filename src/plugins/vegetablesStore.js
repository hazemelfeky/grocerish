import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export default defineStore("vegetables", {
  state: () => ({
    allProducts: [],
    offersProducts: [],
    singleProduct: {},
    cart: [],
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
    async fetchProducts() {
      try {
        const res = await axios.get("fruit/all");
        this.allProducts = this.getRandomPrices(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    getRandomProducts(numberOfProducts) {
      const min = 0;
      const max = this.allProducts.length - numberOfProducts;
      const randomPosition = Math.floor(Math.random() * (max - min)) + min;
      return this.allProducts.slice(
        randomPosition,
        randomPosition + numberOfProducts
      );
    },

    getRandomPrices(itemsList) {
      // Adding prices to products because API doesn't have prices to items
      const PRICES = [12, 15, 7, 9, 17, 8, 14];
      itemsList = itemsList.map((product) => {
        const randomIndex = Math.floor(Math.random() * PRICES.length);
        return { ...product, price: PRICES[randomIndex] };
      });
      return itemsList;
    },

    async fetchProduct(id) {
      try {
        const res = await axios.get(`fruit/${id}`);
        this.singleProduct = res.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    addToCart(item) {
      const isAlreadyInCart = this.cart.some((el) => el.id == item.id);
      if (!isAlreadyInCart) this.cart = [...this.cart, item];
    },
  },
});
