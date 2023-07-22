<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";

</script>
<template>
  <div class="hero">
    <swiper navigation>
      <swiper-slide
        :style="{
          'background-image':
            'url(https://i.pinimg.com/736x/fe/5c/e0/fe5ce04e5b3bbd20fffcb888f3c77bb4.jpg)',
        }"
      >
        <div class="wrapper">
          <h1 class="hero__title">Don’t miss our daily amazing deals.</h1>
          <p class="hero__comment">Save up to 60% off on your first order</p>
          <form class="hero__email">
            <input class="hero__email__input" placeholder="Email address" />
            <button class="hero__email__btn">Subscribe</button>
          </form>
        </div>
      </swiper-slide>
      <swiper-slide
        :style="{
          'background-image':
            'url(https://t3.ftcdn.net/jpg/02/72/24/76/360_F_272247623_GmzIc6nAHj7OAFlIRxVdiNkaRoGT3ZsA.jpg)',
        }"
      >
        <div class="wrapper">
          <h1 class="hero__title">Don’t 2.</h1>
          <p class="hero__comment">Save up to 60% off on your first order</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped></style>
