<script setup>
import AppCardsSlider from "../App/AppCardsSlider.vue";
import AppCard from "../App/AppCard.vue";
import { SwiperSlide } from "swiper/vue";
import { watch } from "vue";
import useVegetablesStore from "../../plugins/vegetablesStore";

const NUMBER_OF_SLIDES = 8;
const store = useVegetablesStore();
const products = ref([]);
watch(
  () => store.allProducts,
  () => {
    products.value = store.getRandomProducts(NUMBER_OF_SLIDES);
  }
);
</script>
<template>
  <AppCardsSlider
    title="Featured Products"
    slides="5"
    nmae="offers"
    class="offers"
  >
    <swiper-slide
      v-for="product in products"
      :key="product.id"
      class="offers__slide"
    >
      <img
        class="offers__slide__img"
        :src="`${IMAGES_BASE_URL}${product.family}.png`"
        alt="img"
      />
      <div class="offers__slide__type">
        <p>{{ product.family }}</p>
        <p>{{ product.genus }}</p>
      </div>
      <h3 class="offers__slide__name">{{ product.name }}</h3>
      <div class="offers__slide__price">
        <h3>{{ product.price.toFixed(2) }} EGP</h3>
        <p>{{ (product.price * 1.25).toFixed(2) }} EGP</p>
      </div>
      <button class="offers__slide__add">
        <Icon icon="bx:cart-add" />
        Add To Cart
      </button>
    </swiper-slide>
  </AppCardsSlider>
</template>

<style lang="scss" scoped></style>
