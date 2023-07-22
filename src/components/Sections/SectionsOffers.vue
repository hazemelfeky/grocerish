<script setup>
import AppCardsSlider from "../App/AppCardsSlider.vue";
import AppCard from "../App/AppCard.vue";
import { SwiperSlide } from "swiper/vue";
// import axios from "../../plugins/axios";

// onMounted(async () => {
//   const params = {
//     from: "0",
//     size: "20",
//     tags: "under_30_minutes",
//   };
//   try {
//     const res = await axios.get("https://simple-grocery-store-api.glitch.me", {
//       params,
//     });
//     console.log(res);
//     // Handle the response data as needed (e.g., set it to component data, display it on the UI, etc.)
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     // Handle errors gracefully
//   }
// });
</script>
<template>
  <AppCardsSlider title="Featured Products" slides="5">
    <swiper-slide v-for="n in 8" :key="n">
      <AppCard />
    </swiper-slide>
  </AppCardsSlider>
</template>

<style lang="scss" scoped></style>
