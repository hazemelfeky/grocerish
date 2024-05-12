<template>
  <div class="product wrapper">
    <h2>UNDER CONSTRUCTING ⚒</h2>
    <img class="product__img" :src="product.image?.data?.attributes.url" />
    <h4>{{ product.name }}</h4>
    <p>{{ product }}</p>
  </div>
</template>

<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";

const store = useVegetablesStore();
const route = useRoute();

const product = computed(() => store.singleProduct);
onMounted(async () => {
  await store.fetchProduct(route.params.id);
});
</script>
