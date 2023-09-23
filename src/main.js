import { createApp } from "vue";
import "./assets/styles/main.scss";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import { createPinia } from "pinia";
import router from "./plugins/router";
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App);
const pinia = createPinia();

app.config.devtools = true;
app.component("Icon", Icon);
app.use(pinia);
app.use(router);
app.use(Notifications)

app.config.globalProperties.IMAGES_BASE_URL =
  "https://res.cloudinary.com/pizzastev/image/upload/v1690926523/groceyish/";
app.mount("#app");
