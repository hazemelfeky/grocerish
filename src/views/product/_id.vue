<template>
  <div class="wrapper">
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

<style lang="scss" scoped></style>
