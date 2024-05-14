<script setup>
defineProps(["product"]);
</script>
<template>
  <router-link :to="`/products/${product.id}`" class="offers__slide">
    <img
      class="offers__slide__img"
      :src="product.image.data?.attributes.url"
      alt="img"
    />
    <div class="offers__slide__type">
      <p>{{ product.category.data.attributes.name }}</p>
    </div>

    <h3 class="offers__slide__name">{{ product.name }}</h3>
    <div class="offers__slide__price">
      <h3>{{ product.price }} EGP</h3>
      <p>{{ (product.price + product.price / 2).toFixed(2) }} EGP</p>
    </div>
    <button
      class="offers__slide__add"
      @click.stop="handleAddToCart($event, product)"
    >
      <Icon icon="bx:cart-add" />
      Add To Cart
    </button>
  </router-link>
</template>

<style lang="scss" scoped></style>
