<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";
import { useNotification } from "@kyvg/vue3-notification";

const store = useVegetablesStore();
const cart = computed(() => store.cart);

const delelteItem = (item) => {
  store.deleteFromCart(item);
};

const { notify } = useNotification();

const handleCheckout = () => {
  notify({
    title: "Not available now",
    text: "This feature will be availbe soon",
  });
};
</script>
<template>
  <h2 v-if="!cart.length">NO PRODUCTS YET!</h2>
  <div v-else class="cart wrapper">
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
        <div class="cart__products__product__controls">
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
      <button class="cart__totals__checkout" @click="handleCheckout">
        Checkout
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
