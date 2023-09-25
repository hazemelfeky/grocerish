<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";
const store = useVegetablesStore();
const isModelVisable = ref(false);
const cartLength = computed(() =>
  store.cart.reduce((acc, el) => el.quantity + acc, 0)
);

const cartPrice = computed(() =>
  store.cart.reduce((acc, el) => el.price * el.quantity + acc, 0)
);

const handleFeatures = () => {
  isModelVisable.value = true;
};
</script>
<template>
  <nav class="controls">
    <div class="wrapper">
      <div class="controls__user">
        <router-link to="/cart" class="controls__user__cart">
          <div class="controls__user__cart__icon">
            <Icon icon="mdi:cart-outline" />
            <span v-if="cartLength" class="controls__user__cart__icon__counter">
              {{ cartLength }}
            </span>
          </div>
          <div class="controls__user__cart__price">
            <p>Cart</p>
            <p>{{ cartPrice }} £</p>
          </div>
        </router-link>
        <AppUser class="controls__user__profile" />
      </div>
      <router-link to="/">
        <h3 class="controls__logo">Groceyish</h3>
      </router-link>
      <div class="controls__sidebar--btn" @click="$emit('toggleNav')">
        <Icon icon="tabler:dots" />
      </div>
      <form class="controls__search">
        <input
          class="controls__search__input"
          placeholder="What are you looking for ?"
          @input="handleFeatures"
        />
        <button class="controls__search__btn">
          <Icon icon="ic:outline-search" />
        </button>
      </form>
    </div>
  </nav>
  <AppModal v-model="isModelVisable">
    <template #header> This feature will be availble soon </template>
  </AppModal>
</template>

<style lang="scss" scoped></style>
