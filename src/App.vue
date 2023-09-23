<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";
import layout from "@/layouts/default.vue";

const store = useVegetablesStore();

onMounted(async () => {
  await store.fetchProducts();
});
</script>

<template>
  <layout>
    <notifications classes="vue-notification notification"/>
    <router-view />
  </layout>
</template>
