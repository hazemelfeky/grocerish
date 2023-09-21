<script setup>
const navIsVisable = ref(false);

const toggleNav = () => {
  navIsVisable.value = !navIsVisable.value;
};
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsCategories />
    <SectionsBanners />
    <SectionsOffers />
    <SectionsAdvantages />
  </div>
</template>
