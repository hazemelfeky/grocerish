<script setup>
import AppCardsSlider from "@/components/App/AppCardsSlider.vue";
import { SwiperSlide } from "swiper/vue";
import useVegetablesStore from "@/plugins/vegetablesStore";
import { useNotification } from "@kyvg/vue3-notification";

const NUMBER_OF_SLIDES = 8;
const store = useVegetablesStore();
const products = computed(() => store.getRandomProducts(NUMBER_OF_SLIDES));

const { notify } = useNotification();
const handleAddToCart = (e, item) => {
  e.preventDefault();
  store.addToCart(item);
  notify({
    title: "Add item",
    text: `Add new item ${item.name}`,
  });
};
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
      <router-link :to="`/products/${product.id}`">
        <div
          class="cart__products__product__image"
          :style="{
            backgroundImage: `url(${IMAGES_BASE_URL}${product.name}.png)`,
          }"
        ></div>
        <div class="offers__slide__type">
          <p>{{ product.family }}</p>
          <p>{{ product.genus }}</p>
        </div>

        <h3 class="offers__slide__name">{{ product.name }}</h3>
        <div class="offers__slide__price">
          <h3>{{ product.price.toFixed(2) }} EGP</h3>
          <p>{{ product.oldPrice.toFixed(2) }} EGP</p>
        </div>
        <button
          class="offers__slide__add"
          @click="handleAddToCart($event, product)"
        >
          <Icon icon="bx:cart-add" />
          Add To Cart
        </button>
      </router-link>
    </swiper-slide>
  </AppCardsSlider>
</template>

<style lang="scss" scoped></style>
