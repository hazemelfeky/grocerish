<script setup>
defineProps({
  navIsVisable: { type: Boolean },
});
</script>

<template>
  <div class="navbar" :class="{ visable: navIsVisable }">
    <div class="wrapper">
      <div class="navbar__user">
        <AppUser />
      </div>
      <a class="navbar_browse--btn">
        <Icon icon="fluent:grid-28-regular" />
        Browse All Categories
      </a>
      <ul class="navbar__pages">
        <li>
          <router-link to="/"><Icon icon="ic:outline-home" />Home</router-link>
        </li>
        <li>
          <router-link to="/about"><Icon icon="carbon:percentage" />Featured</router-link>
        </li>
        <li>
          <router-link to="/"><Icon icon="bxs:hot" />Daily Best Deals</router-link>
        </li>
      </ul>
      <div class="navbar__call">
        <div class="navbar__call__number">
          <Icon icon="ri:headphone-fill" />
          1233-7777
        </div>
        <div class="navbar__call__note">24/7 Support Center</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
