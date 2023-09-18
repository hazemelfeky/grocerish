<script setup>
import AppUser from '../App/AppUser.vue';

// import { Icon } from '@iconify/vue';
</script>
<template>
  <nav class="controls">
    <div class="wrapper">
      <div class="controls__user">
        <div class="controls__user__cart">
          <div class="controls__user__cart__icon">
            <Icon icon="mdi:cart-outline" />
            <span class="controls__user__cart__icon__counter">5</span>
          </div>
          <div class="controls__user__cart__price">
            <p>Cart</p>
            <p>21$</p>
          </div>
        </div>
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
        />
        <button class="controls__search__btn">
          <Icon icon="ic:outline-search" />
        </button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
