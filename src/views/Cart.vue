<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";

const store = useVegetablesStore();
const cart = computed(() => store.cart);

const delelteItem = (item) => {
  store.deleteFromCart(item);
};
</script>
<template>
  <div class="cart wrapper">
    <div class="cart__products">
      <div
        class="cart__products__product"
        v-for="product in cart"
        :key="product.id"
      >
        <div
          class="cart__products__product__image"
          :style="{
            backgroundImage: `url(${IMAGES_BASE_URL}${product.name}.png)`,
          }"
        ></div>
        <div class="cart__products__product__details">
          <h4>{{ product.name }}</h4>
          <p>{{ product.family }}</p>
        </div>
        <div class="cart__products__product__price">
          <span>{{ product.oldPrice }} £</span>
          <div>{{ product.price }} £</div>
        </div>
        <div class="cart__products__product__quantity">
          <AppQuantityCounter v-model="product.quantity" />
          <button class="delete-btn" @click="delelteItem(product)">
            delete
          </button>
        </div>
      </div>
    </div>
    <div class="cart__totals">
      <h3>Totals</h3>
      <p
        class="cart__totals__product"
        v-for="product in cart"
        :key="product.id"
      >
        {{ product.quantity }} {{ product.name }} with
        <span>{{ (product.price * product.quantity).toFixed(2) }} £</span>
      </p>
      <p class="cart__totals__total">
        {{ cart.reduce((acc, item) => item.quantity * item.price + acc, 0) }} £
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
