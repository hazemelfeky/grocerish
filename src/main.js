import { createApp } from "vue";
import "./assets/styles/main.scss";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.config.devtools = true;
app.component("Icon", Icon);
app.use(pinia);

app.config.globalProperties.IMAGES_BASE_URL =
  "https://res.cloudinary.com/pizzastev/image/upload/v1690926523/groceyish/";
app.mount("#app");
