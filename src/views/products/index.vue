<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";

const store = useVegetablesStore();
const route = useRoute();
const loading = ref(false);

const getProducts = async (params) => {
  loading.value = true;
  await store.fetchProducts(params);
  loading.value = false;
};

watch(
  () => route.query,
  (val) => {
    getProducts(val);
  },
  { immediate: true }
);
</script>
<template>
  <div class="products-page wrapper">
    <h3>All products ({{ store.allProducts.length }})</h3>

    <div class="cards-container offers">
      <template v-if="loading">
        <div v-for="slide in 4" :key="slide" class="offers__slide skeleton">
          <div class="categories__slide__img img"></div>
          <h4></h4>
          <p></p>
        </div>
      </template>
      <template v-else>
        <router-link
          v-for="product in store.allProducts"
          :key="product.id"
          :to="`/products/${product.id}`"
          class="offers__slide"
        >
          <img
            class="offers__slide__img"
            :src="product.image.data?.attributes.url"
            alt="img"
          />
          <div class="offers__slide__type">
            <p>{{ product.category.data.attributes.name }}</p>
          </div>

          <h3 class="offers__slide__name">{{ product.name }}</h3>
          <div class="offers__slide__price">
            <h3>{{ product.price }} EGP</h3>
            <p>{{ (product.price + product.price / 2).toFixed(2) }} EGP</p>
          </div>
          <button
            class="offers__slide__add"
            @click="handleAddToCart($event, product)"
          >
            <Icon icon="bx:cart-add" />
            Add To Cart
          </button>
        </router-link>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-page {
  margin-top: 1rem;
}
</style>
