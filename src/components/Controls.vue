<script setup>
// import { Icon } from '@iconify/vue';
</script>
<template>
  <nav class="controls">
    <h3 class="controls__logo">Groceyish</h3>
    <Icon icon="mdi-light:home" />
    <div class="controls__search">
      <input
        class="controls__search__input"
        placeholder="What are you looking for ?"
      />
      <button class="controls__search__btn">🔎</button>
    </div>

    <div class="controls__user">
      <div class="controls__user__cart">
        <div class="controls__user__cart__icon">
          🛒
          <span class="controls__user__cart__icon__counter">5</span>
        </div>
        <div class="controls__user__cart__price">
          <p>Cart</p>
          <p>21$</p>
        </div>
      </div>
      <div class="controls__user__profile">🍕</div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
