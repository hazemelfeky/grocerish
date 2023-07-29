<script setup>
defineProps({
  product: { required: true },
});
</script>
<template>
  <div class="app__card">
    <div>Name: {{ product.name }}</div>
    <div>Family: {{ product.family }}</div>
    <div>8 Items</div>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
