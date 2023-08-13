<script setup>
import AppCardsSlider from "../App/AppCardsSlider.vue";
import { SwiperSlide } from "swiper/vue";
import useVegetablesStore from "../../plugins/vegetablesStore";

const store = useVegetablesStore();
const categories = computed(() => store.categoriesProducts);
// const IMAGES_BASE_URL =
//   "https://res.cloudinary.com/pizzastev/image/upload/v1690926523/groceyish/";
</script>
<template>
  <div class="categories">
    <AppCardsSlider title="Explore Categories" slides="6" name="categories">
      <swiper-slide v-for="(value, key) in categories" :key="key" class="categories__slide">
        <img
          class="categories__slide__img"
          :src="`${IMAGES_BASE_URL}${key}.png`"
          alt="img"
        />
        <h4>{{ key }}</h4>
        <p>{{ value.length }} items</p>
      </swiper-slide>
    </AppCardsSlider>
  </div>
</template>
