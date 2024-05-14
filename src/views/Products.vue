<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";

const store = useVegetablesStore();
const route = useRoute();
const router = useRouter();
const category = ref(null);
const loading = ref(false);
const categoriesLoading = ref(false);

const getProducts = async (params) => {
  loading.value = true;
  await store.fetchProducts(params);
  loading.value = false;
};

const handleChangeCategory = (e) => {
  router.push({ query: { category_id: e.target.value } });
};

onMounted(async () => {
  categoriesLoading.value = true;
  await store.fetchCategories();
  categoriesLoading.value = false;
});

watch(
  () => route.query,
  (val) => {
    getProducts(val);
    category.value = +val.category_id;
  },
  { immediate: true }
);
</script>
<template>
  <div class="products-page wrapper">
    <h3>All products ({{ store.allProducts.length }})</h3>
    <select
      name="category"
      id="category"
      class="category-select"
      v-if="!categoriesLoading"
      v-model="category"
      @change="handleChangeCategory"
    >
      <option
        v-for="category in store.allCategories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.attributes.name }}
      </option>
    </select>
    <div class="cards-container offers">
      <template v-if="loading">
        <CardSkeleton v-for="slide in 4" :key="slide" :details="true" />
      </template>
      <template v-else>
        <CardProduct
          v-for="product in store.allProducts"
          :key="product.id"
          :product="product"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-page {
  margin-top: 1rem;
}

.category-select {
  appearance: none;
  border: 1px solid #237d64;
  border-radius: 3px;
  padding: 0.5rem;
  width: 50%;
  position: relative;

  option {
    padding: 0.25rem;
  }

  &::after {
    content: "";
    position: absolute;
    right: 1rem;
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: red;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
}
</style>
