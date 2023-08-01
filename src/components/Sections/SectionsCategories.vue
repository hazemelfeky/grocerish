<script setup>
import AppCardsSlider from "../App/AppCardsSlider.vue";
import { SwiperSlide } from "swiper/vue";
import useVegetablesStore from "../../plugins/vegetablesStore";

const store = useVegetablesStore();
const categories = computed(() => store.categoriesProducts);
</script>
<template>
  <div>
    <AppCardsSlider title="Explore Categories" slides="6">
      <swiper-slide v-for="(value, key) in categories" :key="key">
        {{ key }} : {{ value.length }} items
      </swiper-slide>
    </AppCardsSlider>
  </div>
</template>

<style scoped>
.default-slider .swiper-slide {
  display: flex;
  height: 300px !important;

  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  font-weight: 700;
}
.swiper-slide:nth-child(1n) {
  background-color: palevioletred;
}
.swiper-slide:nth-child(2n) {
  background-color: skyblue;
}
.swiper-slide:nth-child(3n) {
  background-color: peru;
}
.swiper-slide:nth-child(4n) {
  background-color: cadetblue;
}
.swiper-slide:nth-child(5n) {
  background-color: plum;
}
.swiper-slide:nth-child(6n) {
  background-color: goldenrod;
}
.swiper-slide:nth-child(7n) {
  background-color: palegreen;
}
</style>
