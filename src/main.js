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

app.mount("#app");
