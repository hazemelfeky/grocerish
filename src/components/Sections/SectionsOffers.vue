<script setup>
import AppCardsSlider from "@/components/App/AppCardsSlider.vue";
import { SwiperSlide } from "swiper/vue";
import useVegetablesStore from "@/plugins/vegetablesStore";
import { useNotification } from "@kyvg/vue3-notification";

const store = useVegetablesStore();
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await store.fetchProducts();
  loading.value = false;
});

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
  <div class="offers">
    <AppCardsSlider
      v-if="loading"
      title="Featured Products"
      slides="5"
      name="offers"
    >
      <swiper-slide
        v-for="slide in 4"
        :key="slide"
        class="offers__slide skeleton"
      >
        <div class="img"></div>
        <p></p>
        <h4></h4>
        <p></p>
      </swiper-slide>
    </AppCardsSlider>
    <AppCardsSlider v-else title="Featured Products" slides="5" nmae="offers">
      <swiper-slide
        v-for="product in store.allProducts"
        :key="product.id"
        class="offers__slide"
      >
        <router-link :to="`/products/${product.id}`">
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
      </swiper-slide>
    </AppCardsSlider>
  </div>
</template>

<style lang="scss" scoped></style>
