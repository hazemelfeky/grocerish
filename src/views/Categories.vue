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
  <div class="categories categories-page wrapper">
    <template v-if="loading">
      <div v-for="slide in 4" :key="slide" class="categories__slide skeleton">
        <div class="categories__slide__img img"></div>
        <h4></h4>
        <p></p>
      </div>
    </template>
    <template v-else>
      <router-link
        v-for="category in store.allCategories"
        :key="category.id"
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
    </template>
  </div>
</template>

<style lang="scss" scoped>
.categories-page {
  margin-top: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
}
</style>
