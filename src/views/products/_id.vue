<template>
  <div class="product wrapper">
    <h2>UNDER CONSTRUCTING ⚒</h2>
    <img class="product__img" :src="`${IMAGES_BASE_URL}${product.family}.png`" />
    <h4>{{product.name}}</h4>
    <p>{{product}}</p>
  </div>
</template>

<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";
import { useRoute } from 'vue-router'

const store = useVegetablesStore();
const route = useRoute();

const product = computed(() => store.singleProduct);
onMounted(async () => {
  await store.fetchProduct(route.params.id);
});
</script>
