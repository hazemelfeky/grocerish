<script setup>
import AppCardsSlider from "../App/AppCardsSlider.vue";
import AppCard from "../App/AppCard.vue";
import { SwiperSlide } from "swiper/vue";
import { watch } from "vue";
import useVegetablesStore from "../../plugins/vegetablesStore";

const NUMBER_OF_SLIDES = 8;
const store = useVegetablesStore();
const test = ref(store.categoriesProducts);
const products = ref([]);
watch(
  () => store.allProducts,
  () => {
    products.value = store.getRandomProducts(NUMBER_OF_SLIDES);
  }
);
</script>
<template>
  <AppCardsSlider title="Featured Products" slides="5" nmae="offers">
    <swiper-slide v-for="product in products" :key="product">
      <AppCard :product="product" />
    </swiper-slide>
  </AppCardsSlider>
</template>

<style lang="scss" scoped></style>
