<script setup>
import Home from "@/views/Home.vue";
import axios from "@/plugins/axios";
import useVegetablesStore from "@/plugins/vegetablesStore";
import layout from "@/layouts/default.vue";

const store = useVegetablesStore();

onMounted(async () => {
  const params = {};
  try {
    const res = await axios.get("fruit/all", { params });
    store.allProducts = store.getRandomPrices(res.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <layout>
    <router-view />
  </layout>
</template>
