<script setup>

const navIsVisable = ref(false);

const toggleNav = () => {
  navIsVisable.value = !navIsVisable.value;
};
</script>

<template>
  <div>
    <SectionsControls @toggle-nav="toggleNav" />
    <SectionsNavbar :navIsVisable="navIsVisable" />
    <SectionsHero />
    <SectionsCategories />
    <SectionsOffers />
  </div>
</template>
