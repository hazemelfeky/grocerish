<script setup>
import { Swiper } from "swiper/vue";

const props = defineProps({
  title: { required: false, default: "Title " },
  slides: { required: false, default: 5 },
  breakpoints: { required: false },
});

const breakpoints = props.breakpoints ?? {
  200: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  640: {
    slidesPerView: props.slides - 4,
  },
  768: {
    slidesPerView: props.slides - 2,
  },
  1024: {
    slidesPerView: props.slides - 1,
  },
};
</script>
<template>
  <div class="cards--slider">
    <div class="wrapper">
      <div class="cards--slider__header">
        <h3 class="cards--slider__header__title">{{ title }}</h3>
        <div class="cards--slider__header__btns">
          <button><Icon icon="mingcute:arrow-left-fill" /></button>
          <button><Icon icon="mingcute:arrow-right-fill" /></button>
        </div>
      </div>
      <div class="cards--slider__cards">
        <swiper
          :slides-per-view="slides"
          :space-between="10"
          :breakpoints="breakpoints"
        >
          <slot />
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
