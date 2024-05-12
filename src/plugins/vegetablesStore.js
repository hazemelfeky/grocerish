import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export default defineStore("vegetables", {
  state: () => ({
    allProducts: [],
    allCategories: [],
    offersProducts: [],
    singleProduct: {},
    cart: [],
  }),
  actions: {
    async fetchProducts(params = {}) {
      console.log(params);
      try {
        this.allProducts = [];
        const res = await axios.get(
          "products?populate=image&populate=category",
          {
            params: {
              pagination: { pageSize: 100 },
              filters: {
                category: { id: { $eq: params.category_id } },
              },
            },
          }
        );
        this.allProducts = res.data.data.map((el) => ({
          ...el.attributes,
          id: el.id,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async fetchCategories() {
      if (this.allCategories.length) return;
      try {
        const res = await axios.get(
          "categories?populate=image&pagination[pageSize]=100"
        );
        this.allCategories = res.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async fetchProduct(id) {
      try {
        const res = await axios.get(`products/${id}?populate=image`);
        this.singleProduct = res.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    addToCart(item) {
      const isAlreadyInCart = this.cart.some((el) => el.id == item.id);
      if (!isAlreadyInCart) {
        this.cart = [...this.cart, { ...item, quantity: 1 }];
      } else {
        this.cart.find((el) => el.id == item.id).quantity++;
      }
    },

    deleteFromCart(item) {
      this.cart = this.cart.filter((el) => el.id != item.id);
    },
  },
});
