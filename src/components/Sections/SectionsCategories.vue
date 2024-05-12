<script setup>
import AppCardsSlider from "../App/AppCardsSlider.vue";
import { SwiperSlide } from "swiper/vue";
import useVegetablesStore from "../../plugins/vegetablesStore";

const store = useVegetablesStore();
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await store.fetchCategories();
  loading.value = false;
});
</script>
<template>
  <div class="categories">
    <AppCardsSlider
      v-if="loading"
      title="Explore Categories"
      slides="6"
      name="categories"
    >
      <swiper-slide
        v-for="slide in 4"
        :key="slide"
        class="categories__slide skeleton"
      >
        <div class="categories__slide__img img"></div>
        <h4></h4>
        <p></p>
      </swiper-slide>
    </AppCardsSlider>
    <AppCardsSlider
      v-else
      title="Explore Categories"
      slides="6"
      name="categories"
    >
      <swiper-slide v-for="category in store.allCategories" :key="category.id">
        <router-link
          :to="`/products?category=${category.id}`"
          class="categories__slide"
        >
          <img
            class="categories__slide__img"
            :src="category.attributes.image.data?.attributes.url"
            alt="img"
          />
          <h4>{{ category.attributes.name }}</h4>
          <p>{{ category.attributes.name }} items</p>
        </router-link>
      </swiper-slide>
    </AppCardsSlider>
  </div>
</template>
