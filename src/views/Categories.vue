<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";

const store = useVegetablesStore();
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await store.fetchCategories();
  loading.value = false;
});
</script>
<template>
  <div class="categories wrapper">
    <h3>All categories ({{ store.allCategories.length }})</h3>
    <div class="cards-container">
      <template v-if="loading">
        <div v-for="slide in 4" :key="slide">
          <CardSkeleton />
        </div>
      </template>
      <template v-else>
        <router-link
          v-for="category in store.allCategories"
          :key="category.id"
          :to="`/products?category_id=${category.id}`"
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
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
