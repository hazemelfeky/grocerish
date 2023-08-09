<script setup>
import { Swiper } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const props = defineProps({
  title: { required: false, default: "Title " },
  slides: { required: false, default: 5 },
  breakpoints: { required: false },
  name: { required: false, default: "swiper" },
});

const breakpoints = props.breakpoints ?? {
  200: {
    slidesPerView: 1,
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

const options = {
  modules: [Navigation, Autoplay],
  rewind: true,
  navigation: {
    prevEl: `.${props.name}-swiper-prev`,
    nextEl: `.${props.name}-swiper-next`,
  },
  autoplay: {
    delay: 1500,
  },
  effect: "fade",
  slidesPerView: props.slides,
  spaceBetween: 10,
  breakpoints,
};
</script>
<template>
  <div class="cards--slider">
    <div class="wrapper">
      <div class="cards--slider__header">
        <h3 class="cards--slider__header__title">{{ title }}</h3>
        <div class="cards--slider__header__btns">
          <button :class="`${props.name}-swiper-prev`">
            <Icon icon="mingcute:arrow-left-fill" />
          </button>
          <button :class="`${props.name}-swiper-next`">
            <Icon icon="mingcute:arrow-right-fill" />
          </button>
        </div>
      </div>
      <div class="cards--slider__cards">
        <swiper v-bind="options">
          <slot />
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
