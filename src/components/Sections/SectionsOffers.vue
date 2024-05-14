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
      >
        <CardSkeleton :details="true" />
      </swiper-slide>
    </AppCardsSlider>
    <AppCardsSlider v-else title="Featured Products" slides="5" nmae="offers">
      <swiper-slide v-for="product in store.allProducts" :key="product.id">
        <CardProduct :product="product" />
      </swiper-slide>
    </AppCardsSlider>
  </div>
</template>

<style lang="scss" scoped></style>
