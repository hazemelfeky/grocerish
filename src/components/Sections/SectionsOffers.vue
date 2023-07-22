<script setup>
import AppCardsSlider from "../App/AppCardsSlider.vue";
import { SwiperSlide } from "swiper/vue";

</script>
<template>
  <AppCardsSlider title="OFFERS" slides="5">
    <swiper-slide v-for="n in 8" :key="n"> {{ n }} </swiper-slide>
  </AppCardsSlider>
</template>

<style lang="scss" scoped></style>
