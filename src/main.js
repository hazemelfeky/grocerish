import { createApp } from "vue";
import "./assets/styles/main.scss";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

const app = createApp(App);

app.config.devtools = true;
app.component("Icon", Icon);
app.mount("#app");
