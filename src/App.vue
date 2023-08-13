<script setup>
import Home from "./views/Home.vue";
import axios from "./plugins/axios";
import useVegetablesStore from "./plugins/vegetablesStore";

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
  <Home />
</template>
