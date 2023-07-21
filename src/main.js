import { createApp } from "vue";
import "./assets/styles/main.scss";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

// import { swiper, swiperSlide } from "swiper/vue"; // Corrected swiper import
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'

// // Swiper modules
// SwiperClass.use([Navigation, Pagination, Autoplay]);


const app = createApp(App);
app.component("Icon", Icon);
// app.component("Swiper", swiper); // Use Swiper component globally
// app.component("SwiperSlide", swiperSlide); // Use SwiperSlide component globally
app.mount("#app");
