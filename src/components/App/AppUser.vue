<script setup>
import useVegetablesStore from "../../plugins/vegetablesStore";

const store = useVegetablesStore();
const isAuth = computed(() => !!store.auth.token);
const username = computed(() => store.auth.userInfo.username);

const handleLogout = () => {
  store.logout();
};
</script>
<template>
  <div class="header__user">
    <AppMenu v-if="isAuth">
      <template #activator>
        <div class="header__user__profile" popovertarget="popover">
          <div class="header__user__profile__img">
            <img src="/user.png" alt="user img" />
          </div>
          <div class="header__user__profile__name">{{ username }}</div>
        </div>
      </template>
      <template #menu-list>
        <button class="menu-item" @click="handleLogout">logout</button>
      </template>
    </AppMenu>
    <router-link v-else to="/login">Login</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.header__user {
  a {
    color: $base-color;
  }
}
</style>
